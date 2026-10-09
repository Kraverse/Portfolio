(() => {
  const API_BASE = 'https://kraverse-ai-api.onrender.com';
  const apiUrl = (window.KRAVERSE_API_URL || localStorage.getItem('kraverse-api-url') || API_BASE).replace(/\/$/, '');
  const suggestions = [
    'Explain HelpDesk AI and its RAG architecture',
    'Which AI/ML projects has Kartik built?',
    'What technologies does Kartik use?',
    'Help me prepare for an AI/ML internship interview'
  ];
  const panel = document.createElement('section');
  panel.className = 'kraverse-ai-panel';
  panel.setAttribute('aria-label', 'KraVerse AI assistant');
  panel.innerHTML = `
    <button class="kraverse-ai-toggle" type="button" aria-expanded="false" aria-controls="kraverse-ai-window">
      <span class="kraverse-ai-toggle-icon" aria-hidden="true">✳</span><span>Ask KraVerse AI</span><span class="kraverse-ai-online-dot" aria-hidden="true"></span>
    </button>
    <div class="kraverse-ai-window" id="kraverse-ai-window" role="dialog" aria-label="Chat with KraVerse AI" hidden>
      <div class="kraverse-ai-head">
        <div class="kraverse-ai-brand"><span class="kraverse-ai-mark" aria-hidden="true">K</span><span><strong>KraVerse AI</strong><small>Portfolio intelligence · AI assistant</small></span></div>
        <button type="button" class="kraverse-ai-close" aria-label="Close assistant">×</button>
      </div>
      <div class="kraverse-ai-status"><span class="kraverse-ai-online-dot"></span> Connected to portfolio knowledge <span class="kraverse-ai-status-sep">·</span> <span>Online AI</span></div>
      <div class="kraverse-ai-messages" aria-live="polite">
        <div class="kraverse-ai-welcome"><span class="kraverse-ai-orb" aria-hidden="true">✳</span><h3>Hey, I'm KraVerse AI.</h3><p>Ask me about Kartik's AI/ML work, projects, tech stack, or interview experience. I'll stick to verified portfolio information.</p></div>
        <div class="kraverse-ai-suggestions" aria-label="Suggested questions">${suggestions.map((s, i) => `<button type="button" class="kraverse-ai-suggestion" data-prompt="${s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"><span>${s}</span><span aria-hidden="true">↗</span></button>`).join('')}</div>
      </div>
      <div class="kraverse-ai-options"><label><input type="checkbox" name="interview_mode" /> <span>Interview mode</span></label><span class="kraverse-ai-model">Grounded answers</span></div>
      <form class="kraverse-ai-form"><input name="message" autocomplete="off" maxlength="12000" placeholder="Ask about a project, skill, or concept…" required aria-label="Your question" /><button type="submit" aria-label="Send message"><span>Send</span><span aria-hidden="true">↑</span></button></form>
      <div class="kraverse-ai-note"><span aria-hidden="true">◇</span> AI can make mistakes. Verify important details.</div>
    </div>`;
  document.body.appendChild(panel);

  const toggle = panel.querySelector('.kraverse-ai-toggle');
  const win = panel.querySelector('.kraverse-ai-window');
  const close = panel.querySelector('.kraverse-ai-close');
  const messages = panel.querySelector('.kraverse-ai-messages');
  const form = panel.querySelector('.kraverse-ai-form');
  const input = form.elements.message;
  const interviewMode = form.parentElement.querySelector ? panel.querySelector('[name="interview_mode"]') : null;

  const addMessage = (text, role) => {
    const item = document.createElement('div');
    item.className = `kraverse-ai-message ${role}`;
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    return item;
  };
  const setOpen = (open) => {
    win.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  };
  const ask = (question) => {
    input.value = question;
    form.requestSubmit();
  };
  toggle.addEventListener('click', () => setOpen(win.hidden));
  close.addEventListener('click', () => setOpen(false));
  panel.querySelectorAll('.kraverse-ai-suggestion').forEach(button => button.addEventListener('click', () => ask(button.dataset.prompt)));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    input.value = '';
    const send = form.querySelector('button');
    send.disabled = true;
    send.innerHTML = '<span>Thinking</span><span class="kraverse-ai-spinner" aria-hidden="true"></span>';
    const pending = addMessage('Searching verified portfolio knowledge…', 'bot pending');
    try {
      const response = await fetch(`${apiUrl}/chat/online`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, interview_mode: Boolean(interviewMode && interviewMode.checked) })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (response.status === 503) throw new Error(data.detail || 'Online AI is not configured yet. Please try again later.');
        if (response.status === 429) throw new Error('Too many requests. Please wait a minute and try again.');
        throw new Error(data.detail || 'The assistant could not complete this request.');
      }
      pending.remove();
      addMessage(data.answer || 'I do not have enough verified information to answer that.', 'bot');
      if (Array.isArray(data.sources) && data.sources.length) {
        addMessage('Knowledge sources: ' + data.sources.map(s => s.replace(/^knowledge\//, '').replace(/\.md$/, '')).join(' · '), 'source');
      }
    } catch (error) {
      pending.remove();
      addMessage(error.message || 'Unable to reach KraVerse AI. Please try again.', 'error');
    } finally {
      send.disabled = false;
      send.innerHTML = '<span>Send</span><span aria-hidden="true">↑</span>';
      input.focus();
    }
  });
})();