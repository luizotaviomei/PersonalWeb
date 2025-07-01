function toggleTheme(element) {
  const isLight = element.checked;
  document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}
window.toggleTheme = toggleTheme;
