// scripts/applySettings.js
document.addEventListener('DOMContentLoaded', () => {
  // 🌗 Tema salvo
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // ✨ Animações visuais
  if (localStorage.getItem('toggleAnimations') === 'false') {
    document.body.classList.add('no-animations');
  }

  // 🌈 Contraste alto
  if (localStorage.getItem('increaseContrast') === 'true') {
    document.body.classList.add('high-contrast');
  }

  // 🧩 Estilo do menu lateral
  const menuStyle = localStorage.getItem('menuStyle');
  const sidebar = document.getElementById('sidebar');
  if (menuStyle === 'floating' && sidebar) {
    sidebar.classList.add('floating-menu');
  }

  // 🚀 Pré-carregar atualizações
  const preloadUpdates = localStorage.getItem('preloadUpdates');
  if (preloadUpdates === 'true') {
    const updatesModal = document.getElementById('updates-modal');
    if (updatesModal) updatesModal.classList.remove('hidden');
  }

  // 🛠️ Modo Dev Logs ativo
  const enableDevLogs = localStorage.getItem('enableDevLogs');
  if (enableDevLogs === 'true') {
    console.log('%c[DevLogs] Modo Dev Logs Ativado', 'color:#a855f7;font-weight:bold;');
    // Aqui você pode carregar algo específico no futuro
  }

  // 🐞 Mostrar dados de debug no console
  const debugConsole = localStorage.getItem('debugConsole');
  if (debugConsole === 'true') {
    console.log('%c[DEBUG]', 'color: orange; font-weight: bold;', {
      theme: savedTheme,
      toggleAnimations: localStorage.getItem('toggleAnimations'),
      contrast: localStorage.getItem('increaseContrast'),
      menuStyle,
    });
  }

  // 🔁 Forçar reexibição do modal de atualização
  const forceUpdateModal = localStorage.getItem('forceUpdateModal');
  if (forceUpdateModal === 'true') {
    localStorage.removeItem('updateModalSeen');
    const updatesModal = document.getElementById('updates-modal');
    if (updatesModal) updatesModal.classList.remove('hidden');
  }

  // 🌐 Idioma (pode expandir no futuro)
  const lang = localStorage.getItem('languageSelect');
  if (lang && lang === 'en') {
    console.log('%c[Info] English mode is selected (placeholder only)', 'color: gray');
    // Você pode ativar tradução dinâmica futuramente
  }
});
