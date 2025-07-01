// scripts/sidebar.js
export function toggleSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").style.display = "block";
  document.querySelector(".menu-button").style.display = "none";
}

export function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").style.display = "none";
  document.querySelector(".menu-button").style.display = "flex";
}

window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
