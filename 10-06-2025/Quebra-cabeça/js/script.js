const tabuleiro = document.getElementById("tabuleiro");
const toggleTheme = document.getElementById("toggleTheme");
const statusEl = document.getElementById("status");

let pecas = [];
let primeiraSelecionada = null;

function criarPecas() {
    pecas = [];

    for (let i = 0; i < 9; i++) {
        const div= document.createElement("div");
        div.classList.add("peca");
        div.dataset.index = i;

        const x = (i % 3) * -100;
        const y = Math.floor(i / 3) * -100;
        div.style.backgroundPosition = `${x}px ${y}px`;

        pecas.push(div);
    }
    embaralhar();
    renderizar();
}
function embaralhar() {
    pecas.sort(() => Math.random() - 0.5);
}
function renderizar() {
    tabuleiro.innerHTML = "";
    pecas.forEach((peca,i) => {
        peca.dataset.posicao = i;
        tabuleiro.appendChild(peca);
    });
}
function verificarVitoria() {
    const ganhou = pecas.every((peca, index) => {
        return parseInt(peca.dataset.index) === index;
    });
    statusEl.textContent = ganhou ? "Você completou o quebra-cabeça!" : "";
}
tabuleiro.addEventListener("click", (e) => {
    const peca = e.target;
    if (!peca.classList.contains("peca")) return;

    if (!primeiraSelecionada) {
        primeiraSelecionada = peca;
        peca.style.outline = "2px solid red";
    } else if (peca !== primeiraSelecionada) {

        const idx1 = pecas.indexOf(primeiraSelecionada);
        const idx2 = pecas.indexOf(peca);

        [pecas[idx1], pecas[idx2]] = [pecas[idx2], pecas[idx1]];
        primeiraSelecionada.style.outline = "none";
        primeiraSelecionada = null;

        renderizar();
        verificarVitoria();
    }
});
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ?"☀️" : "🌙";
});
criarPecas();
