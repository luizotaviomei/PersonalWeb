document.addEventListener("DOMContentLoaded", () => {
  // Animar barras de progresso
  const progressBars = document.querySelectorAll(".progress-fill");
  
  // Observer para animar quando entrar na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = parseInt(bar.dataset.level);
        
        // Animar a largura
        setTimeout(() => {
          bar.style.width = level + "%";
        }, 200);
        
        // Animar o número da porcentagem
        const card = bar.closest('.skill-card');
        const percentage = card.querySelector('.percentage');
        animateNumber(percentage, 0, level, 2000);
        
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });

  // Função para animar números
  function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOut);
      
      element.textContent = current + '%';
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
    
    requestAnimationFrame(updateNumber);
  }

  // Calcular e atualizar estatísticas
  updateStats();

  function updateStats() {
    const skills = document.querySelectorAll('.progress-fill');
    const totalSkills = skills.length;
    const categories = document.querySelectorAll('.category').length;
    
    // Calcular média geral
    let totalLevel = 0;
    skills.forEach(skill => {
      totalLevel += parseInt(skill.dataset.level);
    });
    const average = Math.round(totalLevel / totalSkills);

    // Atualizar os cards de estatística
    setTimeout(() => {
      const statNumbers = document.querySelectorAll('.stat-number');
      if (statNumbers[0]) animateNumber(statNumbers[0], 0, totalSkills, 1500);
      if (statNumbers[1]) animateNumber(statNumbers[1], 0, categories, 1500);
      if (statNumbers[2]) animateNumber(statNumbers[2], 0, average, 1500);
    }, 1000);
  }

  // Adicionar efeitos de hover nos cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const progressFill = card.querySelector('.progress-fill');
      progressFill.style.animationPlayState = 'running';
    });
  });

  // Adicionar partículas de fundo (opcional)
  createBackgroundParticles();

  function createBackgroundParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    `;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--accent-color);
        border-radius: 50%;
        opacity: 0.3;
        animation: float ${5 + Math.random() * 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
      `;
      particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);
  }

  // Adicionar animação CSS para as partículas
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.3;
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.6;
      }
    }
  `;
  document.head.appendChild(style);
});