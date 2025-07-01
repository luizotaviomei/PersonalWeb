document.querySelectorAll(".accordion").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    const panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
