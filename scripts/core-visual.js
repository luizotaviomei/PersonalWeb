// ========= core-visual.js =========

const core = document.getElementById('core');
const orbit = document.querySelector('.orbit');
const orbitalContainer = document.createElement('div');
orbitalContainer.classList.add('orbital-balls-container');

if (core && orbit) {
  // Adiciona container de partículas orbitais ao core-visual
  const visualContainer = document.getElementById('core-visual');
  if (visualContainer) {
    visualContainer.appendChild(orbitalContainer);
  }

  // Geração das partículas em órbita
  for (let i = 0; i < 25; i++) {
    const ball = document.createElement('div');
    ball.classList.add('orbital-ball');

    const radius = 60 + Math.random() * 80;
    const duration = 5 + Math.random() * 10;
    const size = 2 + Math.random() * 4;
    const angle = Math.random() * 360;

    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    ball.style.top = '50%';
    ball.style.left = '50%';
    ball.style.transform = `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`;
    ball.style.animation = `orbit ${duration}s linear infinite`;

    orbitalContainer.appendChild(ball);
  }

  // Parallax do núcleo com base no movimento do mouse
  window.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = (e.clientX - innerWidth / 2) / 30;
    const offsetY = (e.clientY - innerHeight / 2) / 30;

    core.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    orbit.style.transform = `rotate(${e.clientX / 10}deg)`;
  });

  // Reset de animação ao sair do mouse da janela
  window.addEventListener('mouseout', () => {
    core.style.transform = 'translate(0, 0)';
  });
}
