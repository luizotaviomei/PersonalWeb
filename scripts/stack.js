// stack.js
document.addEventListener("DOMContentLoaded", () => {
  aplicarTemaSalvo();
  animarTitulo();
  animarBarrasDeProgresso();
  animarCategorias();
  animarPorcentagens();
  aplicarEfeitosHoverNosCards();
});

// === Tema salvo no localStorage ===
function aplicarTemaSalvo() {
  const savedTheme = localStorage.getItem('theme');
  const checkbox = document.querySelector('.switch input');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  // Garantir que scroll funcione corretamente
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
}

// === Animação do título ===
function animarTitulo() {
  const text = "Minha Stack";
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  typingElement.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      typingElement.textContent += text[i++];
    } else {
      clearInterval(interval);
      setTimeout(() => {
        typingElement.style.borderRight = 'none';
      }, 1000);
    }
  }, 100);
}

// === Barras de progresso com cor e animação ===
function animarBarrasDeProgresso() {
  const progressFills = document.querySelectorAll(".progress-fill");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const fill = entry.target;
      const level = parseInt(fill.dataset.level);

      let color;
      if (level >= 80) color = "linear-gradient(90deg, #10b981, #059669)";
      else if (level >= 60) color = "linear-gradient(90deg, #3b82f6, #1d4ed8)";
      else if (level >= 40) color = "linear-gradient(90deg, #8b5cf6, #7c3aed)";
      else if (level >= 20) color = "linear-gradient(90deg, #f59e0b, #d97706)";
      else color = "linear-gradient(90deg, #ef4444, #dc2626)";

      const shadowColor = level >= 60
        ? '#3b82f6'
        : level >= 40
        ? '#8b5cf6'
        : level >= 20
        ? '#f59e0b'
        : '#ef4444';

      // Animação suave
      setTimeout(() => {
        fill.style.width = level + '%';
        fill.style.background = color;
        fill.style.boxShadow = `0 0 10px ${shadowColor}40`;
      }, Math.random() * 800 + 300);

      observer.unobserve(fill);
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  progressFills.forEach(fill => observer.observe(fill));
}

// === Categorias: entrada com fade e translate ===
function animarCategorias() {
  const categories = document.querySelectorAll('.category');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 300);
        observer.unobserve(entry.target);
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
    observer.observe(category);
  });
}

// === Animação de porcentagens com contador numérico suave ===
function animarPorcentagens() {
  const percentages = document.querySelectorAll('.percentage');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const targetValue = parseInt(element.textContent);
      element.setAttribute("aria-label", `${targetValue}%`);
      let start = null;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / 1000, 1); // dura 1 segundo
        const currentValue = Math.floor(progress * targetValue);
        element.textContent = currentValue + '%';
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          element.textContent = targetValue + '%';
        }
      };

      requestAnimationFrame(animate);
      observer.unobserve(element);
    });
  }, {
    threshold: 0.5
  });

  percentages.forEach(el => observer.observe(el));
}

// === Hover nos cards: animação sutil ===
function aplicarEfeitosHoverNosCards() {
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}
