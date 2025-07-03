function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.add("open");
    overlay.style.display = "block";
    menuBtn.classList.add("open");

    // Espera a animação de virar o X antes de esconder
    setTimeout(() => {
      menuBtn.classList.add("hidden");
    }, 300);
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.remove("open");
    overlay.style.display = "none";

    menuBtn.classList.remove("hidden");

    setTimeout(() => {
      menuBtn.classList.remove("open");
    }, 10);
  }
}

window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
