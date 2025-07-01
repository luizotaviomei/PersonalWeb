// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.remove(), 500);
});
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
document.addEventListener('DOMContentLoaded', () => {
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
  }, 6000); // espera o fadeOut do #intro
});
const versions = [
  {
    version: "vBeta 1.0",
    changes: [
      "✔ Layout inicial com tema escuro/claro",
      "✔ Loader animado com bolas caindo",
      "✔ Animação de digitação",
      "✔ Menu lateral com abas e modal",
      "✔ Botão de tema com ícones"
    ]
  },
  {
    version: "vBeta 0.9",
    changes: [
      "✔ Protótipo inicial com tema escuro",
      "✔ Base HTML/CSS minimalista",
      "✔ Primeira versão dos ícones de redes sociais"
    ]
  }
];

let currentVersionIndex = 0;

function openUpdates() {
  showVersion(currentVersionIndex);
  document.getElementById("updates-modal").classList.remove("hidden");
}

function closeUpdates() {
  document.getElementById("updates-modal").classList.add("hidden");
}

function showVersion(index) {
  const modal = document.getElementById("updates-modal");
  const versionData = versions[index];
  modal.querySelector("p strong").textContent = versionData.version;

  const ul = modal.querySelector("ul.changelog");
  ul.innerHTML = "";
  versionData.changes.forEach(change => {
    const li = document.createElement("li");
    li.textContent = change;
    ul.appendChild(li);
  });

  // Controla estado dos botões
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
function openUpdates() {
  document.getElementById("updates-modal").classList.remove("hidden");
}

function closeUpdates() {
  document.getElementById("updates-modal").classList.add("hidden");
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

function toggleTheme(checkbox) {
  if (checkbox.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
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
