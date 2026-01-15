// EFEITO FUNDO DE CÓDIGO
const bg = document.querySelector('.code-bg');
if (bg) {
    for (let i = 0; i < 40; i++) {
        const s = document.createElement('span');
        s.innerText = '</>';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.fontSize = 12 + Math.random() * 18 + 'px';
        s.style.animationDuration = 10 + Math.random() * 15 + 's';
        s.style.animationDelay = Math.random() * 5 + 's';
        bg.appendChild(s);
    }
}

// LÓGICA DO MODAL
const modal = document.getElementById('modal');
function openForm(plano) {
    document.getElementById('plano_escolhido').value = plano;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// FECHAR MODAL AO CLICAR FORA
window.onclick = function(event) {
    if (event.target == modal) { closeModal(); }
}

// ALTERNAR TEMA
function toggleTheme() {
    document.body.classList.toggle('light');
}

// FECHAR OUTROS FAQ AO ABRIR UM
const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});