
// ========= core-visual.js =========

const core = document.getElementById('core');
const orbit = document.querySelector('.orbit');
const visualContainer = document.getElementById('core-visual');

// 1. Bolhas espalhadas pela tela toda
function createFloatingBalls() {
  const numBalls = 80;

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement('div');
    ball.classList.add('floating-ball');

    const size = Math.random() * 4 + 2;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = 8 + Math.random() * 8;

    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    ball.style.left = `${posX}px`;
    ball.style.top = `${posY}px`;
    ball.style.animationDuration = `${duration}s`;

    visualContainer.appendChild(ball);
  }
}

// 2. Núcleo com parallax
if (core && orbit) {
  window.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = (e.clientX - innerWidth / 2) / 30;
    const offsetY = (e.clientY - innerHeight / 2) / 30;

    core.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    orbit.style.transform = `translate(-50%, -50%) rotate(${e.clientX / 10}deg)`;
  });

  window.addEventListener('mouseout', () => {
    core.style.transform = 'translate(-50%, -50%)';
    orbit.style.transform = 'translate(-50%, -50%) rotate(0deg)';
  });
}

// 3. Inicializar
createFloatingBalls();
