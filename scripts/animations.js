// animations.js

export function initSnow() {
  const NUM_BOLAS = 80;

  for (let i = 0; i < NUM_BOLAS; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    // Posição inicial aleatória
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.top = `${Math.random() * 100}vh`;

    // Animação de duração variável
    ball.style.animationDuration = `${6 + Math.random() * 6}s`;

    // Tamanho e opacidade variados
    ball.style.opacity = Math.random() * 0.5 + 0.3;
    ball.style.width = ball.style.height = `${4 + Math.random() * 6}px`;

    document.body.appendChild(ball);
  }
}
