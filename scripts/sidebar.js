function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.add("open");
    overlay.style.display = "block";
    menuBtn.classList.add("open", "hidden"); // anima e esconde
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
    menuBtn.classList.remove("open", "hidden"); // reexibe
  }
}
