// scripts/update.js
document.querySelectorAll(".accordion-toggle").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("open");
    const content = button.nextElementSibling;
    content.classList.toggle("open");
  });
});
