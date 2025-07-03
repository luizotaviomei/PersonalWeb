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
    }, 300); // 300ms é o tempo ideal para a transição visual
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.querySelector(".menu-button");

  if (sidebar && overlay && menuBtn) {
    sidebar.classList.remove("open");
    overlay.style.display = "none";

    // Primeiro mostra, depois remove a classe X
    menuBtn.classList.remove("hidden");

    // Pequeno delay para garantir transição suave
    setTimeout(() => {
      menuBtn.classList.remove("open");
    }, 10);
  }
}
