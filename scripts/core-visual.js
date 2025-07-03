// ========= core-visual.js =========

const core = document.getElementById('core');
const orbit = document.querySelector('.orbit');

// Parallax do núcleo com base no movimento do mouse
window.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = (e.clientX - innerWidth / 2) / 30;
  const offsetY = (e.clientY - innerHeight / 2) / 30;
  
  core.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  orbit.style.transform = `rotate(${e.clientX / 10}deg)`; // rotação sutil
});

// Reset de animação ao sair do mouse da janela
window.addEventListener('mouseout', () => {
  core.style.transform = 'translate(0, 0)';
});
