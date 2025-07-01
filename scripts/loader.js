function initLoader() {
  window.addEventListener("load", () => {
    const loader = document.getElementById('loader');
    const typingElement = document.getElementById("typing");

    const isReturning = localStorage.getItem('visitedBefore') === 'true';
    const welcomeText = isReturning ? "Welcome back to Link Hub..." : "Welcome to Link Hub...";

    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
        localStorage.setItem('visitedBefore', 'true');

        if (typingElement) {
          let i = 0;
          const interval = setInterval(() => {
            if (i < welcomeText.length) {
              typingElement.textContent += welcomeText[i];
              i++;
            } else {
              clearInterval(interval);
            }
          }, 100);
        }
      }, 500);
    }, 1000);
  });
}

// Torna a função acessível globalmente
window.initLoader = initLoader;
