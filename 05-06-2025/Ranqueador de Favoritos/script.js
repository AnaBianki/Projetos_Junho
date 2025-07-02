const listaFavoritos = document.getElementById("listaFavoritos");
const toggleTheme = document.getElementById("toggleTheme");

let itens = [
    "Café Capuccino",
    "Música Rock Heavy Metal",
    "Filmes de Ficção Científica",
    "Chocolate 70% cacau",
    "Caminhadas ao ar livre",
    "Jogo Indie de plataforma",
    "Livros de Literatura Clássica",
    "Festas de aniversário com amigos",
    "Culinária caseira"
];

function renderizarLista() {
    listaFavoritos.innerHTML = "";
    itens.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item}</span>
            <div class="botoes">
                <button onclick="mover(${index}, -1)">⬆️</button>
                <button onclick="mover(${index}, 1)">⬇️</button>
            </div>
        `;
        listaFavoritos.appendChild(li);
    });
}

function mover(index, direcao) {
    const novoIndex = index + direcao;
    if (novoIndex < 0 || novoIndex >= itens.length) return;
    [itens[index], itens[novoIndex]] = [itens[novoIndex], itens[index]];
    renderizarLista();
}

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

renderizarLista();
