function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.add("open");
    overlay.style.display = "block";
    menuBtn.classList.add("open"); // animação do botão
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
    menuBtn.classList.remove("open"); // desfaz a animação
  }
}

// Torna global
window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
