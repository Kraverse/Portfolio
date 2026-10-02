(() => {
  const apiUrl = window.KRAVERSE_API_URL || localStorage.getItem('kraverse-api-url') || 'http://localhost:8000';
  const panel = document.createElement('section');
  panel.className = 'kraverse-ai-panel';
  panel.setAttribute('aria-label', 'KraVerse AI assistant');
  panel.innerHTML = `
    <button class="kraverse-ai-toggle" type="button" aria-expanded="false" aria-controls="kraverse-ai-window">Ask KraVerse AI</button>
    <div class="kraverse-ai-window" id="kraverse-ai-window" hidden>
      <div class="kraverse-ai-head"><div><strong>KraVerse AI</strong><small>Ask about Kartik & his projects</small></div><button type="button" class="kraverse-ai-close" aria-label="Close">×</button></div>
      <div class="kraverse-ai-messages" aria-live="polite"><div class="kraverse-ai-message bot">Hi! Ask me about Kartik's projects, skills, education, or technical work.</div></div>
      <form class="kraverse-ai-form"><input name="message" autocomplete="off" maxlength="12000" placeholder="Ask a question…" required /><button type="submit">Send</button></form>
      <small class="kraverse-ai-note">Answers use verified portfolio knowledge. They may be incomplete.</small>
    </div>`;
  document.body.appendChild(panel);

  const toggle = panel.querySelector('.kraverse-ai-toggle');
  const win = panel.querySelector('.kraverse-ai-window');
  const close = panel.querySelector('.kraverse-ai-close');
  const messages = panel.querySelector('.kraverse-ai-messages');
  const form = panel.querySelector('.kraverse-ai-form');
  const input = form.elements.message;

  const addMessage = (text, role) => {
    const item = document.createElement('div');
    item.className = `kraverse-ai-message ${role}`;
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
  };

  const setOpen = (open) => {
    win.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  };

  toggle.addEventListener('click', () => setOpen(win.hidden));
  close.addEventListener('click', () => setOpen(false));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    input.value = '';
    const button = form.querySelector('button');
    button.disabled = true;
    addMessage('Thinking…', 'bot pending');
    const pending = messages.lastElementChild;
    try {
      const response = await fetch(`${apiUrl.replace(/\/$/, '')}/chat/online`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Assistant unavailable');
      pending.remove();
      addMessage(data.answer || 'I do not have enough verified information to answer that.', 'bot');
      if (data.sources?.length) addMessage(`Sources: ${data.sources.join(', ')}`, 'source');
    } catch (error) {
      pending.remove();
      addMessage(`I could not reach the assistant. ${error.message}`, 'bot');
    } finally {
      button.disabled = false;
      input.focus();
    }
  });
})();
