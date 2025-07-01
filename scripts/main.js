document.addEventListener('DOMContentLoaded', () => {
  // Recupera e aplica o tema salvo
  const checkbox = document.querySelector('.switch input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  // Substitui o botão "Sobre mim" por um link, caso ainda seja um botão
  const sobreBtn = document.querySelector('.accordion-item button.accordion-title');
  if (sobreBtn && sobreBtn.textContent.includes('Sobre mim')) {
    const newLink = document.createElement('a');
    newLink.href = 'sobre.html';
    newLink.className = 'accordion-title';
    newLink.textContent = 'Sobre mim';
    sobreBtn.parentNode.replaceChild(newLink, sobreBtn);
  }

  // Sincroniza todos os elementos do settings.js com o estado salvo no localStorage
  for (const key in settings) {
    const el = document.getElementById(key);
    if (!el) continue;

    // Associa o evento ao elemento
    el.addEventListener('change', settings[key]);

    // Define o valor inicial com base no localStorage
    if (el.type === 'checkbox') {
      el.checked = localStorage.getItem(key) === 'true';
    } else if (el.tagName === 'SELECT') {
      const saved = localStorage.getItem(key);
      if (saved) el.value = saved;
    }

    // Aplica a função de configuração imediatamente
    settings[key]();
  }
});
