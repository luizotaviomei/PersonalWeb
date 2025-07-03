function initOrbitingBubbles() {
  const NUM_BOLHAS = 2000;
  const orbit = document.querySelector('.orbit');

  if (!orbit) return;

  for (let i = 0; i < NUM_BOLHAS; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    // Cada bolha recebe um ângulo diferente na órbita
    const angle = (360 / NUM_BOLHAS) * i;
    const delay = Math.random() * 4;

    ball.style.transform = `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg)`;
    ball.style.animationDelay = `${delay}s`;

    orbit.appendChild(ball);
  }
}
window.initOrbitingBubbles = initOrbitingBubbles;
