document.querySelectorAll(".accordion-toggle").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("open");

    const panel = button.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("open");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("open");
    }
  });
});
