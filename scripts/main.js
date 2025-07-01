document.addEventListener('DOMContentLoaded', () => {
  // Tema
  const checkbox = document.querySelector('.switch input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  // Corrigir botão "Sobre mim"
  const sobreBtn = document.querySelector('.accordion-item button.accordion-title');
  if (sobreBtn && sobreBtn.textContent.includes('Sobre mim')) {
    const newLink = document.createElement('a');
    newLink.href = 'sobre.html';
    newLink.className = 'accordion-title';
    newLink.textContent = 'Sobre mim';
    sobreBtn.parentNode.replaceChild(newLink, sobreBtn);
  }

  // Aplicar configurações do settings.js
  if (typeof settings !== 'undefined') {
    for (const key in settings) {
      const el = document.getElementById(key);
      if (!el) continue;

      el.addEventListener('change', settings[key]);

      if (el.type === 'checkbox') {
        el.checked = localStorage.getItem(key) === 'true';
      } else if (el.tagName === 'SELECT') {
        const saved = localStorage.getItem(key);
        if (saved) el.value = saved;
      }

      settings[key](); // Aplica efeito
    }
  }

  // Corrigir botões de menu
  const updatesBtn = document.getElementById('updates-button');
  if (updatesBtn && typeof openUpdates === 'function') {
    updatesBtn.addEventListener('click', openUpdates);
  }

  const settingsBtn = document.getElementById('settings-button');
  if (settingsBtn && typeof toggleSettings === 'function') {
    settingsBtn.addEventListener('click', toggleSettings);
  }
});
