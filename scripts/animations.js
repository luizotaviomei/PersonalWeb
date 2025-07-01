function initSnow() {
  const NUM_BOLAS = 80;

  for (let i = 0; i < NUM_BOLAS; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.top = `${Math.random() * 100}vh`;
    ball.style.animationDuration = `${6 + Math.random() * 4}s`;
    ball.style.opacity = Math.random().toFixed(2);
    document.body.appendChild(ball);
  }
}
window.initSnow = initSnow;
