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
  const progressBars = document.querySelectorAll(".progress-fill");
  
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
        
        bar.style.backgroundColor = color;
        
        // Animar a largura
        setTimeout(() => {
          bar.style.width = level + "%";
        }, 200);
        
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.3
  });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });

  // Calcular e atualizar estatísticas
  setTimeout(() => {
    updateStats();
  }, 1000);

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

    // Atualizar os elementos de estatística
    const totalSkillsEl = document.getElementById('total-skills');
    const totalCategoriesEl = document.getElementById('total-categories');
    const averageLevelEl = document.getElementById('average-level');

    if (totalSkillsEl) totalSkillsEl.textContent = totalSkills;
    if (totalCategoriesEl) totalCategoriesEl.textContent = categories;
    if (averageLevelEl) averageLevelEl.textContent = average + '%';
  }

  // Adicionar efeitos de hover nos cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});