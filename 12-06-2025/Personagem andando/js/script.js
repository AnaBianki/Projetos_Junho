const personagem = document.getElementById("personagem");
const toggleTheme = document.getElementById("toggleTheme");

let posicao = 105;
const passo = 10;
let virado = 1;

function atualizarPersonagem() {
    personagem.style.transform = `translateX(${posicao}px) scaleX(${virado})`;
}
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        posicao += passo;
        virado = -1;
        atualizarPersonagem();
    } else if (e.key === "ArrowLeft") {
        posicao -= passo;
        virado = 1;
        atualizarPersonagem();
    }
});
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
 atualizarPersonagem();