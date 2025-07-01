// scripts/applySettings.js
document.addEventListener('DOMContentLoaded', () => {
  // Aplica o tema
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // Aplica animações
  if (localStorage.getItem('toggleAnimations') === 'false') {
    document.body.classList.add('no-animations');
  }

  // Contraste
  if (localStorage.getItem('increaseContrast') === 'true') {
    document.body.classList.add('high-contrast');
  }

  // Estilo de menu 
  const menuStyle = localStorage.getItem('menuStyle');
  const sidebar = document.getElementById('sidebar');
  if (menuStyle === 'floating' && sidebar) {
    sidebar.classList.add('floating-menu');
  }
});

