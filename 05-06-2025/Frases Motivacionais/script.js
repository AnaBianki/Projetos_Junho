const frases = [
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Você é mais forte do que imagina.",
    "Não espere por oportunidades, crie-as.",
    "A persistência realiza o impossível.",
    "Acredite no seu potencial.",
    "Faça hoje o que seu futuro agradecerá.",
    "Você não precisa ser perfeito, só precisa começar.",
    "Grandes jornadas começam com um simples passo.",
    "Seja a mudança que você quer ver no mundo.",
    "Desafios são oportunidades disfarçadas."
];
const fraseEl = document.getElementById("frase");
const novaFraseBtn = document.getElementById("novaFrase");
const toggleTheme = document.getElementById("toggleTheme");

function gerarFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    fraseEl.style.opacity = 0;
    setTimeout(() => {
        fraseEl.textContent = frases[indice];
        fraseEl.style.opacity = 1;
    }, 200);
}
novaFraseBtn.addEventListener("click", gerarFraseAleatoria);
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = 
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});