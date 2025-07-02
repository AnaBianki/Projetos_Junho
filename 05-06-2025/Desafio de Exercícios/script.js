const desafios = [
    "10 flexões",
    "20 agachamentos",
    "15 abdominais",
    "30 segundos de prancha",
    "10 burpees",
    "1 minuto de corrida parada",
    "20 polichinelos",
    "10 saltos com agachamento",
    "30 segundos de skipping",
    "15 avanços (lunges)",
    "1 minuto de dança livre",
    "20 segundos de prancha lateral",
    "10 flexões com joelho",
    "1 minuto de alongamento de braços",
    "15 elevações de panturrilha"
];

const desafioEl = document.getElementById("desafio");
const sortearBtn = document.getElementById("sortearBtn");
const toggleTheme = document.getElementById("toggleTheme");

function sortearDesafio() {
    const index = Math.floor(Math.random() * desafios.length);
    desafioEl.style.opacity = 0;
    setTimeout(() => {
        desafioEl.textContent = desafios[index];
        desafioEl.style.opacity = 1;
    }, 200);
}
sortearBtn.addEventListener("click", sortearDesafio);
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});