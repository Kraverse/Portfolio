(() => {
  const API_BASE = 'https://kraverse-ai-api.onrender.com';
  let savedApiUrl = '';
  try { savedApiUrl = localStorage.getItem('kraverse-api-url') || ''; } catch (_) {}
  const apiUrl = (window.KRAVERSE_API_URL || savedApiUrl || API_BASE).replace(/\/$/, '');
  const suggestions = [
    'Explain HelpDesk AI and its RAG approach',
    'How does MedRAG-X connect answers to sources?',
    'What does RepoDoctor AI do?',
    'What AI/ML skills does Kartik use in his projects?',
    'What is Kartik\'s technical background?'
  ];

  const panel = document.createElement('section');
  panel.className = 'kraverse-ai-panel';
  panel.setAttribute('aria-label', 'KraVerse AI assistant');
  panel.innerHTML = `
    <button class="kraverse-ai-toggle" type="button" aria-expanded="false" aria-controls="kraverse-ai-window">
      <span class="kraverse-ai-toggle-icon" aria-hidden="true">&#10038;</span>
      <span>Ask KraVerse AI</span>
    </button>
    <div class="kraverse-ai-window" id="kraverse-ai-window" role="dialog" aria-modal="false" aria-labelledby="kraverse-ai-title" aria-describedby="kraverse-ai-description" hidden>
      <div class="kraverse-ai-head">
        <div class="kraverse-ai-brand"><span class="kraverse-ai-mark" aria-hidden="true">K</span><span><strong id="kraverse-ai-title">KraVerse AI</strong><small>Portfolio guide</small></span></div>
        <button type="button" class="kraverse-ai-close" aria-label="Close assistant">&times;</button>
      </div>
      <div class="kraverse-ai-status" role="status" aria-live="polite" aria-atomic="true" data-state="ready"><span class="kraverse-ai-status-dot" aria-hidden="true"></span><span class="kraverse-ai-status-text">Ready for a question</span></div>
      <div class="kraverse-ai-messages" aria-label="Conversation" aria-live="polite" aria-relevant="additions" aria-busy="false">
        <div class="kraverse-ai-welcome"><span class="kraverse-ai-orb" aria-hidden="true">&#10038;</span><h3>Hey, I'm KraVerse AI.</h3><p id="kraverse-ai-description">Ask about Kartik's projects, AI/ML skills, or technical background. Answers are based on the portfolio information available to the assistant.</p></div>
        <div class="kraverse-ai-suggestions" role="group" aria-label="Suggested questions">${suggestions.map((question) => `<button type="button" class="kraverse-ai-suggestion" data-prompt="${question.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"><span>${question}</span><span aria-hidden="true">&rarr;</span></button>`).join('')}</div>
      </div>
      <div class="kraverse-ai-options"><label><input type="checkbox" name="interview_mode" /> <span>Interview mode</span></label><span class="kraverse-ai-model">Portfolio Q&amp;A</span></div>
      <form class="kraverse-ai-form" aria-label="Ask KraVerse AI"><input name="message" autocomplete="off" maxlength="12000" placeholder="Ask about a project, skill, or concept..." required aria-label="Your question" /><button type="submit"><span>Send</span><span aria-hidden="true">&uarr;</span></button></form>
      <div class="kraverse-ai-note">AI can make mistakes. Verify important details.</div>
    </div>`;
  document.body.appendChild(panel);

  const toggle = panel.querySelector('.kraverse-ai-toggle');
  const win = panel.querySelector('.kraverse-ai-window');
  const close = panel.querySelector('.kraverse-ai-close');
  const messages = panel.querySelector('.kraverse-ai-messages');
  const status = panel.querySelector('.kraverse-ai-status');
  const statusText = panel.querySelector('.kraverse-ai-status-text');
  const form = panel.querySelector('.kraverse-ai-form');
  const input = form.elements.message;
  const send = form.querySelector('button[type="submit"]');
  const interviewMode = panel.querySelector('[name="interview_mode"]');
  let returnFocus = toggle;

  const setStatus = (message, state) => {
    statusText.textContent = message;
    status.dataset.state = state;
  };
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
    else if (panel.contains(document.activeElement)) returnFocus.focus();
  };
  const ask = (question) => {
    if (send.disabled) return;
    input.value = question;
    form.requestSubmit();
  };

  toggle.addEventListener('click', () => {
    if (win.hidden) returnFocus = toggle;
    setOpen(win.hidden);
  });
  document.querySelectorAll('[data-kraverse-ai-open]').forEach((button) => {
    button.addEventListener('click', () => {
      returnFocus = button;
      setOpen(true);
    });
  });
  close.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !win.hidden) setOpen(false);
  });
  panel.querySelectorAll('.kraverse-ai-suggestion').forEach((button) => {
    button.addEventListener('click', () => ask(button.dataset.prompt));
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message || send.disabled) return;

    addMessage(message, 'user');
    input.value = '';
    send.disabled = true;
    input.disabled = true;
    form.setAttribute('aria-busy', 'true');
    messages.setAttribute('aria-busy', 'true');
    panel.querySelectorAll('.kraverse-ai-suggestion').forEach((button) => { button.disabled = true; });
    send.innerHTML = '<span>Connecting</span><span class="kraverse-ai-spinner" aria-hidden="true"></span>';
    setStatus('Connecting to KraVerse AI...', 'loading');
    const pending = addMessage('Connecting to KraVerse AI...', 'bot pending');

    try {
      const response = await fetch(`${apiUrl}/chat/online`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, interview_mode: Boolean(interviewMode && interviewMode.checked) })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (response.status === 503) throw new Error(data.detail || 'Online AI is not available right now. Please try again later.');
        if (response.status === 429) throw new Error('Too many requests. Please wait a minute and try again.');
        throw new Error(data.detail || 'The assistant could not complete this request.');
      }

      pending.remove();
      const answer = typeof data.answer === 'string' ? data.answer.trim() : '';
      addMessage(answer || 'I do not have enough verified portfolio information to answer that yet.', 'bot');
      const sources = Array.isArray(data.sources) ? data.sources.filter((source) => typeof source === 'string') : [];
      if (sources.length) {
        addMessage('Knowledge sources: ' + sources.map((source) => source.replace(/^knowledge\//, '').replace(/\.md$/, '')).join(' | '), 'source');
      }
      setStatus('Answer ready', 'success');
    } catch (error) {
      pending.remove();
      const message = error instanceof TypeError
        ? 'I could not connect to KraVerse AI. Please try again in a moment.'
        : (error.message || 'Unable to reach KraVerse AI. Please try again.');
      addMessage(message, 'error');
      setStatus('Connection unavailable', 'error');
    } finally {
      send.disabled = false;
      input.disabled = false;
      form.removeAttribute('aria-busy');
      messages.setAttribute('aria-busy', 'false');
      panel.querySelectorAll('.kraverse-ai-suggestion').forEach((button) => { button.disabled = false; });
      send.innerHTML = '<span>Send</span><span aria-hidden="true">&uarr;</span>';
      input.focus();
    }
  });
})();
