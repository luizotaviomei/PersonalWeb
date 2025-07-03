document.addEventListener("DOMContentLoaded", () => {
  // Aplicar tema salvo
  const savedTheme = localStorage.getItem('theme');
  const checkbox = document.querySelector('.switch input');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  // Animação de digitação do título
  const text = "Minha Stack";
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    typingElement.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        typingElement.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        // Remove o cursor após completar a digitação
        setTimeout(() => {
          typingElement.style.borderRight = 'none';
        }, 1000);
      }
    }, 100);
  }

  // Animar barras de progresso
  const progressFills = document.querySelectorAll(".progress-fill");
  
  // Observer para animar quando entrar na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const level = parseInt(fill.dataset.level);
        
        // Definir cor baseada no nível com gradientes mais bonitos
        let color = "#ef4444"; // vermelho para níveis baixos
        if (level >= 80) {
          color = "linear-gradient(90deg, #10b981, #059669)"; // verde para níveis muito altos
        } else if (level >= 60) {
          color = "linear-gradient(90deg, #3b82f6, #1d4ed8)"; // azul para níveis altos
        } else if (level >= 40) {
          color = "linear-gradient(90deg, #8b5cf6, #7c3aed)"; // roxo para níveis médios-altos
        } else if (level >= 20) {
          color = "linear-gradient(90deg, #f59e0b, #d97706)"; // amarelo para níveis médios
        } else {
          color = "linear-gradient(90deg, #ef4444, #dc2626)"; // vermelho para níveis baixos
        }
        
        // Animar a barra com delay escalonado
        setTimeout(() => {
          fill.style.width = level + '%';
          fill.style.background = color;
          fill.style.boxShadow = `0 0 10px ${level >= 60 ? '#3b82f6' : level >= 40 ? '#8b5cf6' : level >= 20 ? '#f59e0b' : '#ef4444'}40`;
        }, Math.random() * 800 + 300);
        
        observer.unobserve(fill);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  progressFills.forEach(fill => {
    observer.observe(fill);
  });

  // Adicionar efeitos de hover nos cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Animação de entrada das categorias
  const categories = document.querySelectorAll('.category');
  const categoryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 300);
        categoryObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  categories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(50px)';
    category.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    categoryObserver.observe(category);
  });

  // Adicionar efeito de parallax sutil no scroll
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.category');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  // Ativar parallax apenas em desktop
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', requestTick);
  }

  // Adicionar contador animado nas porcentagens
  const percentages = document.querySelectorAll('.percentage');
  const percentageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const targetValue = parseInt(element.textContent);
        let currentValue = 0;
        const increment = targetValue / 60; // 60 frames para animação suave
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            element.textContent = targetValue + '%';
            clearInterval(counter);
          } else {
            element.textContent = Math.floor(currentValue) + '%';
          }
        }, 16); // ~60fps
        
        percentageObserver.unobserve(element);
      }
    });
  }, {
    threshold: 0.5
  });

  percentages.forEach(percentage => {
    percentageObserver.observe(percentage);
  });
});