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
  const bars = document.querySelectorAll(".bar");
  
  // Observer para animar quando entrar na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = parseInt(bar.dataset.level);
        
        // Definir cor baseada no nível
        let color = "#ef4444"; // vermelho para níveis baixos
        if (level >= 75) color = "#10b981"; // verde para níveis altos
        else if (level >= 50) color = "#3b82f6"; // azul para níveis médios-altos
        else if (level >= 25) color = "#f59e0b"; // amarelo para níveis médios
        
        // Animar a barra
        setTimeout(() => {
          bar.style.setProperty('--progress-width', level + '%');
          bar.style.setProperty('--progress-color', color);
          bar.style.background = `linear-gradient(to right, ${color} ${level}%, var(--progress-bg) ${level}%)`;
        }, 200);
        
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.3
  });

  bars.forEach(bar => {
    observer.observe(bar);
  });

  // Adicionar efeitos de hover nos cards
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      skill.style.transform = 'translateY(-5px)';
    });
    
    skill.addEventListener('mouseleave', () => {
      skill.style.transform = 'translateY(0)';
    });
  });
});