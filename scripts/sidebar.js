function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.add("open");
    overlay.style.display = "block";
    menuBtn.style.display = "none";
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
    menuBtn.style.display = "flex";
  }
}

// Torna as funções globais para o HTML usar no onclick=""
window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
