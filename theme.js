function toggleTheme(checkbox) {
  if (checkbox.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  }
}