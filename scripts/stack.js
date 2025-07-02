document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  bars.forEach(bar => {
    const level = parseInt(bar.dataset.level);
    bar.style.width = level + "%";

    let color = "red";

    if (level >= 75) color = "deepskyblue";
    else if (level >= 50) color = "limegreen";
    else if (level >= 25) color = "orange";
    else color = "red";

    bar.style.backgroundColor = color;
  });
});
