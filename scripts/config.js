const currentVersion = 'v1.0';

window.settings = {
  toggleAnimations: () => {
    const el = document.getElementById('toggleAnimations');
    if (!el) return;
    const enabled = el.checked;
    document.body.classList.toggle('no-animations', !enabled);
    localStorage.setItem('toggleAnimations', enabled);
  },
  increaseContrast: () => {
    const el = document.getElementById('increaseContrast');
    if (!el) return;
    const enabled = el.checked;
    document.body.classList.toggle('high-contrast', enabled);
    localStorage.setItem('increaseContrast', enabled);
  },
  preloadUpdates: () => {
    const el = document.getElementById('preloadUpdates');
    if (!el) return;
    localStorage.setItem('preloadUpdates', el.checked);
  },
  enableDevLogs: () => {
    const el = document.getElementById('enableDevLogs');
    if (!el) return;
    localStorage.setItem('enableDevLogs', el.checked);
  },
  debugConsole: () => {
    const el = document.getElementById('debugConsole');
    if (!el) return;
    localStorage.setItem('debugConsole', el.checked);
  },
  forceUpdateModal: () => {
    const el = document.getElementById('forceUpdateModal');
    if (!el) return;
    localStorage.setItem('lastSeenVersion', el.checked ? '' : currentVersion);
    localStorage.setItem('forceUpdateModal', el.checked);
  },
  languageSelect: () => {
    const el = document.getElementById('languageSelect');
    if (!el) return;
    localStorage.setItem('languageSelect', el.value);
  },
  menuStyle: () => {
    const el = document.getElementById('menuStyle');
    if (!el) return;
    localStorage.setItem('menuStyle', el.value);
  }
};

window.initSettingsPage = function () {
  for (const key in window.settings) {
    const el = document.getElementById(key);
    if (!el) continue;

    el.addEventListener('change', window.settings[key]);

    if (el.type === 'checkbox') {
      el.checked = localStorage.getItem(key) === 'true';
    } else if (el.tagName === 'SELECT') {
      const saved = localStorage.getItem(key);
      if (saved) el.value = saved;
    }

    window.settings[key](); // Aplicar estado atual
  }

  // Botões extras
  document.getElementById('resetBtn')?.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  document.getElementById('backBtn')?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
};

window.showHelp = function (settingId) {
  alert(`Ajuda para a opção: ${settingId}`);
};
