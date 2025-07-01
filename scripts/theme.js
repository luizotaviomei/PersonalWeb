function toggleTheme(checkbox) {
  const isLight = checkbox.checked;
  document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

window.toggleTheme = toggleTheme;
