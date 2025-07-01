document.addEventListener('DOMContentLoaded', () => {
  const currentVersion = 'v1.0'; // Ou pegue do localStorage se quiser

  const settings = {
    toggleAnimations: () => {
      const enabled = document.getElementById('toggleAnimations')?.checked;
      document.body.classList.toggle('no-animations', !enabled);
      localStorage.setItem('animationsEnabled', enabled);
    },
    increaseContrast: () => {
      const enabled = document.getElementById('increaseContrast')?.checked;
      document.body.classList.toggle('high-contrast', enabled);
      localStorage.setItem('contrastEnabled', enabled);
    },
    menuStyle: () => {
      const style = document.getElementById('menuStyle')?.value || 'fixed';
      localStorage.setItem('menuStyle', style);
    },
    preloadUpdates: () => {
      const enabled = document.getElementById('preloadUpdates')?.checked;
      localStorage.setItem('preloadUpdates', enabled);
    },
    enableDevLogs: () => {
      const enabled = document.getElementById('enableDevLogs')?.checked;
      localStorage.setItem('enableDevLogs', enabled);
    },
    debugConsole: () => {
      const enabled = document.getElementById('debugConsole')?.checked;
      localStorage.setItem('debugConsole', enabled);
    },
    forceUpdateModal: () => {
      const enabled = document.getElementById('forceUpdateModal')?.checked;
      localStorage.setItem('lastSeenVersion', enabled ? '' : currentVersion);
      localStorage.setItem('forceUpdateModal', enabled);
    },
    languageSelect: () => {
      const lang = document.getElementById('languageSelect')?.value;
      localStorage.setItem('languageSelect', lang);
    }
  };

  // Inicializar e aplicar estados salvos
  for (const key in settings) {
    const el = document.getElementById(key);
    if (!el) continue;

    el.addEventListener('change', settings[key]);

    if (el.type === 'checkbox') {
      el.checked = localStorage.getItem(el.id) === 'true';
    } else if (el.tagName === 'SELECT') {
      const saved = localStorage.getItem(el.id);
      if (saved) el.value = saved;
    }

    settings[key](); // Aplica efeito visual (ex: contraste)
  }

  // Botões extras
  document.getElementById('resetBtn')?.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  document.getElementById('backBtn')?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});
