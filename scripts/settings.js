function toggleSettings() {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.toggle('hidden');
  }
}

function closeSettings() {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}
// Fallback seguro para versões
const currentVersion = (typeof versions !== 'undefined' && versions.length > 0)
  ? versions[0].version
  : 'vUnknown';

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
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.classList.toggle('floating-menu', style === 'floating');
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
