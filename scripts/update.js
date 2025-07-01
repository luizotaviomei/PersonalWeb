document.querySelectorAll(".accordion-toggle").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("open");

    const content = button.nextElementSibling;
    if (content.classList.contains("active")) {
      content.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      content.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
