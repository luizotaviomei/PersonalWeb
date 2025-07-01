function toggleSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").style.display = "block";
  document.querySelector(".menu-button").style.display = "none";
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").style.display = "none";
  document.querySelector(".menu-button").style.display = "flex";
}

window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
