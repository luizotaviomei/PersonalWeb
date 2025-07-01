// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.remove(), 500);
});

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

// Versões do changelog com novo formato
const versions = [
  {
    version: "vBeta 1.0",
    implemented: [
      "Layout inicial com tema escuro/claro",
      "Loader animado com bolas caindo",
      "Animação de digitação com texto 'Welcome to Link Hub...'",
      "Menu lateral com abas e modal",
      "Botão de tema com ícones"
    ],
    changed: [
      "Estilo do botão do menu animado"
    ],
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

// DOMContentLoaded para tema e digitação
document.addEventListener('DOMContentLoaded', () => {
  // Aplica tema salvo
  const savedTheme = localStorage.getItem('theme');
  const checkbox = document.querySelector('.switch input');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    checkbox.checked = true;
  }

  // Animação de digitação
  const text = "Welcome to Link Hub...";
  const typingElement = document.getElementById("typing");

  setTimeout(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        typingElement.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }, 6000);
});

// Alternância de tema
function toggleTheme(checkbox) {
  if (checkbox.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  }
}

// Modais de atualizações
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
  const modal = document.getElementById("updates-modal");
  const versionData = versions[index];
  document.getElementById("version-title").textContent = versionData.version;

  const ul = modal.querySelector("ul.changelog");
  ul.innerHTML = "";

  const sections = [
    { title: "Implementado:", items: versionData.implemented },
    { title: "Alterado:", items: versionData.changed },
    { title: "Removido:", items: versionData.removed }
  ];

  sections.forEach(section => {
    if (section.items.length > 0) {
      const header = document.createElement("li");
      header.innerHTML = `<strong>${section.title}</strong>`;
      ul.appendChild(header);
      section.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = "• " + item;
        ul.appendChild(li);
      });
    }
  });

  if (versionData.note) {
    const noteHeader = document.createElement("li");
    noteHeader.innerHTML = `<strong>Nota do desenvolvedor:</strong>`;
    ul.appendChild(noteHeader);
    const noteText = document.createElement("li");
    noteText.textContent = versionData.note;
    ul.appendChild(noteText);
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

// Modal temporário de "Indisponível"
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

// Modal temporário de "Em breve"
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

// Menu lateral
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
