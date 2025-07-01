// Bolas caindo
const NUM_BOLAS = 80;
for (let i = 0; i < NUM_BOLAS; i++) {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.left = `${Math.random() * 100}vw`;
  ball.style.top = `${Math.random() * 100}vh`;
  ball.style.animationDuration = `${6 + Math.random() * 6}s`;
  ball.style.opacity = Math.random() * 0.5 + 0.3;
  ball.style.width = ball.style.height = `${4 + Math.random() * 6}px`;
  document.body.appendChild(ball);
}

// Versões
const versions = [
  {
    version: "vBeta 1.0",
    implemented: [
      "Layout inicial com tema escuro/claro",
      "Loader animado com bolas caindo",
      "Animação de digitação com texto 'Welcome to Link Hub...'",
      "Menu lateral com abas e modal",
      "Botão de tema com ícones",
      "Modal de configurações do site com múltiplas opções"
    ],
    changed: ["Estilo do botão do menu animado"],
    removed: [],
    note: "Primeira versão completa e funcional. Aguardando feedbacks para melhorias futuras."
  },
  {
    version: "vBeta 0.9",
    implemented: [
      "Protótipo inicial com tema escuro",
      "Base HTML/CSS minimalista",
      "Primeira versão dos ícones de redes sociais"
    ],
    changed: [],
    removed: [],
    note: "Protótipo focado em estrutura inicial e testes visuais."
  }
];

let currentVersionIndex = 0;

// === SETTINGS: agora fora do DOMContentLoaded para escopo global ===
const settings = {
  toggleAnimations: () => {
    const enabled = document.getElementById('toggleAnimations')?.checked;
    if (enabled) {
      document.body.classList.remove('no-animations');
    } else {
      document.body.classList.add('no-animations');
    }
    localStorage.setItem('animationsEnabled', enabled);
  },
  increaseContrast: () => {
    const enabled = document.getElementById('increaseContrast')?.checked;
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('contrastEnabled', enabled);
  },
  extremeMinimalMode: () => {
    const enabled = document.getElementById('extremeMinimalMode')?.checked;
    if (enabled) {
      document.body.classList.add('extreme-minimal');
    } else {
      document.body.classList.remove('extreme-minimal');
    }
    localStorage.setItem('minimalEnabled', enabled);
  },
  menuStyle: () => {
    const style = document.getElementById('menuStyle')?.value || 'fixed';
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    if (style === 'floating') {
      sidebar.classList.add('floating-menu');
    } else {
      sidebar.classList.remove('floating-menu');
    }
    localStorage.setItem('menuStyle', style);
  },
  preloadUpdates: () => {
    const enabled = document.getElementById('preloadUpdates')?.checked;
    localStorage.setItem('preloadUpdates', enabled);
  },
  enableDevLogs: () => {
    const enabled = document.getElementById('enableDevLogs')?.checked;
    localStorage.setItem('enableDevLogs', enabled);
  },
  debugConsole: () => {
    const enabled = document.getElementById('debugConsole')?.checked;
    localStorage.setItem('debugConsole', enabled);
  },
  forceUpdateModal: () => {
    const enabled = document.getElementById('forceUpdateModal')?.checked;
    if (enabled) {
      localStorage.setItem('lastSeenVersion', ''); // força abrir
    } else {
      localStorage.setItem('lastSeenVersion', versions[0].version);
    }
    localStorage.setItem('forceUpdateModal', enabled);
  },
  languageSelect: () => {
    const lang = document.getElementById('languageSelect')?.value;
    localStorage.setItem('languageSelect', lang);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('.switch input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (checkbox) checkbox.checked = true;
  }

  const sobreBtn = document.querySelector('.accordion-item button.accordion-title');
  if (sobreBtn && sobreBtn.textContent.includes('Sobre mim')) {
    const newLink = document.createElement('a');
    newLink.href = 'sobre.html';
    newLink.className = 'accordion-title';
    newLink.textContent = 'Sobre mim';
    sobreBtn.parentNode.replaceChild(newLink, sobreBtn);
  }

  // Preferências salvas
const animChecked = localStorage.getItem('animationsEnabled') !== 'false';
const contrastChecked = localStorage.getItem('contrastEnabled') === 'true';
const minimalChecked = localStorage.getItem('minimalEnabled') === 'true';
const savedMenuStyle = localStorage.getItem('menuStyle') || 'fixed';

if (!animChecked) document.body.classList.add('no-animations');
if (contrastChecked) document.body.classList.add('high-contrast');
if (minimalChecked) document.body.classList.add('extreme-minimal');

if (savedMenuStyle === 'floating') {
  document.getElementById('sidebar')?.classList.add('floating-menu');
  const menuStyleEl = document.getElementById('menuStyle');
  if (menuStyleEl) {
    menuStyleEl.value = 'floating';
  }
}

const toggleEl = document.getElementById('toggleAnimations');
if (toggleEl) toggleEl.checked = animChecked;

const contrastEl = document.getElementById('increaseContrast');
if (contrastEl) contrastEl.checked = contrastChecked;

const minimalEl = document.getElementById('extremeMinimalMode');
if (minimalEl) minimalEl.checked = minimalChecked;

for (const key in settings) {
  const el = document.getElementById(key);
  if (!el) continue;
  el.addEventListener('change', settings[key]);

  if (el.type === 'checkbox') {
    el.checked = localStorage.getItem(key) === 'true';
  } else if (el.tagName === 'SELECT') {
    const saved = localStorage.getItem(key);
    if (saved) el.value = saved;
  }

  // Só executa se o elemento existe
  settings[key]();
}
window.addEventListener("load", () => {
  const loader = document.getElementById('loader');
  const typingElement = document.getElementById("typing");
  const updatesButton = document.getElementById('updates-button');

  const isReturning = localStorage.getItem('visitedBefore') === 'true';
  const welcomeText = isReturning ? "Welcome back to Link Hub..." : "Welcome to Link Hub...";

  const currentVersion = versions[0].version;
  const seenVersion = localStorage.getItem('lastSeenVersion');
  if (seenVersion !== currentVersion) {
    openUpdates();
    localStorage.setItem('lastSeenVersion', currentVersion);
  }

  if (updatesButton) {
    updatesButton.onclick = openUpdates;
  }

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.remove();
      localStorage.setItem('visitedBefore', 'true');
      if (typingElement) {
        let i = 0;
        const interval = setInterval(() => {
          if (i < welcomeText.length) {
            typingElement.textContent += welcomeText[i];
            i++;
          } else {
            clearInterval(interval);
          }
        }, 100);
      }
    }, 500);
  }, 1000);
});

function toggleTheme(checkbox) {
  if (checkbox.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  }
}

function openUpdates() {
  showVersion(currentVersionIndex);
  document.getElementById("updates-modal").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector('.modal-buttons button:nth-child(2)')?.focus();
  }, 100);
}

function closeUpdates() {
  document.getElementById("updates-modal").classList.add("hidden");
}

function showVersion(index) {
  const versionData = versions[index];
  document.getElementById("version-title").textContent = versionData.version;

  const container = document.getElementById("changelog-container");
  container.innerHTML = "";

  const sections = [
    { title: "Implementado", items: versionData.implemented },
    { title: "Alterado", items: versionData.changed },
    { title: "Removido", items: versionData.removed }
  ];

  sections.forEach(section => {
    if (section.items.length > 0) {
      const title = document.createElement("h3");
      title.textContent = section.title + ":";
      container.appendChild(title);

      const ul = document.createElement("ul");
      ul.className = "changelog";
      section.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    }
  });

  if (versionData.note) {
    const noteTitle = document.createElement("h3");
    noteTitle.textContent = "Nota do desenvolvedor:";
    container.appendChild(noteTitle);

    const p = document.createElement("p");
    p.textContent = versionData.note;
    container.appendChild(p);
  }

  document.getElementById("prev-version").disabled = index === versions.length - 1;
  document.getElementById("next-version").disabled = index === 0;
}

function showPreviousVersion() {
  if (currentVersionIndex < versions.length - 1) {
    currentVersionIndex++;
    showVersion(currentVersionIndex);
  }
}

function showNextVersion() {
  if (currentVersionIndex > 0) {
    currentVersionIndex--;
    showVersion(currentVersionIndex);
  }
}

function showUnavailableMessage(event) {
  event.preventDefault();
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <p>Indisponível no momento, favor siga para mais atualizações.</p>
      <button onclick="document.body.removeChild(this.parentNode.parentNode)">Tudo bem</button>
    </div>
  `;
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1002
  });
  document.body.appendChild(overlay);
}

function showSoonMessage(title) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <p><strong>${title}</strong><br>Em breve estará disponível!</p>
      <button onclick="document.body.removeChild(this.parentNode.parentNode)">Tudo bem</button>
    </div>
  `;
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1002
  });
  document.body.appendChild(overlay);
}

function toggleSidebar() {
  document.getElementById('sidebar').style.left = '0';
  document.getElementById('sidebar-overlay').style.display = 'block';
  document.querySelector('.menu-button').classList.add('hidden');
}

function closeSidebar() {
  document.getElementById('sidebar').style.left = '-300px';
  document.getElementById('sidebar-overlay').style.display = 'none';
  document.querySelector('.menu-button').classList.remove('hidden');
}

function toggleSettings() {
  document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettings() {
  document.getElementById('settings-modal').classList.add('hidden');
}

function showHelp(optionId) {
  const messages = {
    toggleAnimations: 'Ativa ou desativa animações visuais do site.',
    increaseContrast: 'Melhora a legibilidade com cores de alto contraste.',
    preloadUpdates: 'Carrega automaticamente as últimas atualizações em segundo plano.',
    enableDevLogs: 'Exibe alterações do site em tempo real para fins de desenvolvimento.',
    debugConsole: 'Mostra dados técnicos e mensagens de debug no console.',
    forceUpdateModal: 'Força a exibição do modal de atualização na próxima visita.',
    languageSelect: 'Seleciona o idioma preferido do site.',
    menuStyle: 'Define se o menu será fixo na lateral ou flutuante.',
    extremeMinimalMode: 'Remove elementos visuais supérfluos para um visual ultra minimalista.'
  };

  const message = messages[optionId] || 'Configuração desconhecida.';
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <p>${message}</p>
      <button onclick="document.body.removeChild(this.parentNode.parentNode)">Entendi</button>
    </div>
  `;
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1002
  });
  document.body.appendChild(overlay);
}


