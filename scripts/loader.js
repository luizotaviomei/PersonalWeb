
function initLoader() {
  window.addEventListener("load", () => {
    const loader = document.getElementById('loader');

    setTimeout(() => {
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.remove();
          localStorage.setItem('visitedBefore', 'true');
        }, 500);
      }
    }, 1000);
  });
}

window.initLoader = initLoader;
initLoader();
