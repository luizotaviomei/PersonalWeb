// Chama loader e snow após carregamento
if (typeof initLoader === 'function') {
  initLoader();
}

document.addEventListener('DOMContentLoaded', () => {
  // ❄️ Bolas caindo (caso não esteja no modo minimalista)
  if (!document.body.classList.contains('extreme-minimal')) {
    if (typeof initSnow === 'function') {
      initSnow();
    }
  }

  // 🌙 Aplicar tema salvo
  const checkbox = document.querySelector('.switch input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  // ⚙️ Aplicar configurações se objeto settings estiver disponível
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

      settings[key](); // Aplica efeito inicial
    }
  }

  // 🧾 Botão de atualizações
  const updatesBtn = document.getElementById('updates-button');
  if (updatesBtn && typeof openUpdates === 'function') {
    updatesBtn.addEventListener('click', openUpdates);
  }

  // ⚙️ Redireciona para config
  const settingsBtn = document.getElementById('settings-button');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      window.location.href = 'config.html';
    });
  }
});
