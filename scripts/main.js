import { initLoader } from './loader.js';
import { initSnow } from './animations.js';
import { settings } from './config.js'; // Corrigido: importar o objeto settings

// Loader inicial com animação de digitação
initLoader();

// Efeito de bolas caindo (caso não esteja no modo minimalista)
if (!document.body.classList.contains('extreme-minimal')) {
  initSnow();
}

document.addEventListener('DOMContentLoaded', () => {
  // 🌙 Aplicar tema salvo no localStorage
  const checkbox = document.querySelector('.switch input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  // 🔧 Corrigir botão "Sobre mim" para virar link
  const sobreBtn = document.querySelector('.accordion-item button.accordion-title');
  if (sobreBtn && sobreBtn.textContent.includes('Sobre mim')) {
    const newLink = document.createElement('a');
    newLink.href = 'sobre.html';
    newLink.className = 'accordion-title';
    newLink.textContent = 'Sobre mim';
    sobreBtn.parentNode.replaceChild(newLink, sobreBtn);
  }

  // ⚙️ Aplicar configurações (config.js)
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

      settings[key](); // Aplica o efeito inicial
    }
  }

  // 🧾 Botão de atualizações
  const updatesBtn = document.getElementById('updates-button');
  if (updatesBtn && typeof openUpdates === 'function') {
    updatesBtn.addEventListener('click', openUpdates);
  }

  // ⚙️ Redireciona para página de configurações
  const settingsBtn = document.getElementById('settings-button');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      window.location.href = 'config.html';
    });
  }
});
