function initOrbitingBubbles() {
  const NUM_BOLHAS = 60;
  const orbit = document.querySelector('.orbit');

  if (!orbit) return;

  for (let i = 0; i < NUM_BOLHAS; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    const angle = (360 / NUM_BOLHAS) * i;
    const delay = Math.random() * 5;

    const size = 2 + Math.random() * 3;
    const opacity = 0.3 + Math.random() * 0.7;
    const hue = 260 + Math.random() * 40;

    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    ball.style.background = `hsl(${hue}, 100%, 85%)`;
    ball.style.opacity = opacity.toFixed(2);
    ball.style.position = 'absolute';
    ball.style.top = '50%';
    ball.style.left = '50%';
    ball.style.transform = `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg)`;
    ball.style.animation = `orbitSpin 10s linear infinite`;
    ball.style.animationDelay = `${delay}s`;

    orbit.appendChild(ball);
  }
}
window.initOrbitingBubbles = initOrbitingBubbles;
