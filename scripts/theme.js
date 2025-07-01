// scripts/theme.js
export function toggleTheme(checkbox) {
  const theme = checkbox.checked ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
window.toggleTheme = toggleTheme; // Mantém global para HTML
