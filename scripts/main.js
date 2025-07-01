document.addEventListener('DOMContentLoaded', () => {
  // Recupera e aplica o tema salvo
  const checkbox = document.querySelector('.switch input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  // Substitui o botão "Sobre mim" por um link, caso ainda seja um botão
  const sobreBtn = document.querySelector('.accordion-item button.accordion-title');
  if (sobreBtn && sobreBtn.textContent.includes('Sobre mim')) {
    const newLink = document.createElement('a');
    newLink.href = 'sobre.html';
    newLink.className = 'accordion-title';
    newLink.textContent = 'Sobre mim';
    sobreBtn.parentNode.replaceChild(newLink, sobreBtn);
  }

  // Sincroniza os elementos de configuração com localStorage
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

    settings[key]();
  }

  // Corrige funcionamento dos botões do menu lateral
  const updatesBtn = document.getElementById('updates-button');
  if (updatesBtn) {
    updatesBtn.addEventListener('click', openUpdates);
  }

  const settingsBtn = document.getElementById('settings-button');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', toggleSettings);
  }
});
