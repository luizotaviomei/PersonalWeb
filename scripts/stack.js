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
        
        // Definir cor baseada no nível
        let color = "#ef4444"; // vermelho para níveis baixos
        if (level >= 75) color = "#10b981"; // verde para níveis altos
        else if (level >= 50) color = "#3b82f6"; // azul para níveis médios-altos
        else if (level >= 25) color = "#f59e0b"; // amarelo para níveis médios
        
        // Animar a barra
        setTimeout(() => {
          fill.style.width = level + '%';
          fill.style.backgroundColor = color;
        }, Math.random() * 500 + 200); // delay aleatório para efeito escalonado
        
        observer.unobserve(fill);
      }
    });
  }, {
    threshold: 0.3
  });

  progressFills.forEach(fill => {
    observer.observe(fill);
  });

  // Adicionar efeitos de hover nos cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
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
        }, index * 200);
        categoryObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  categories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    categoryObserver.observe(category);
  });
});