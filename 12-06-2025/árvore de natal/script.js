const luzes = document.getElementById("luzes");
const toggleTheme = document.getElementById("toggleTheme");
const toggleLuzes = document.getElementById("toggleLuzes");
const trocarModo = document.getElementById("trocarModo");

const cores = ["red", "green", "yellow", "blue"];
let ligadas = true;
let modoAtual = 1;
const totalModos = 3;

function criarLuzes() {
    luzes.innerHTML = "";
    luzes.className = `modo-${modoAtual}`;

    const pontos = [
        [50, 30], [120, 20], [180, 35], [90, 80], [150, 90],
        [60, 150], [110, 140], [170, 160], [80, 220], [130, 230],
        [190, 240], [100, 300], [150, 310]
    ];

    pontos.forEach((pos, i) => {
        const luz = document.createElement("div");
        luz.classList.add("luz");
        luz.style.backgroundColor = cores[i % cores.length];
        luz.style.left = `${pos[0]}px`;
        luz.style.top = `${pos[1]}px`;
        luz.style.setProperty("--rand", Math.floor(Math.random()* 10));
        luzes.appendChild(luz);
    });
}

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

toggleLuzes.addEventListener("click", () => {
    ligadas = !ligadas;
    document.querySelectorAll(".luz").forEach(luz => {
        luz.style.animationPlayState = ligadas ? "running" : "paused";
        luz.style.opacity = ligadas ? "1" : "0.3";
    });
    toggleLuzes.textContent = ligadas ? "💡 Desligar Luzes" : "💡 Ligar Luzes";
});

trocarModo.addEventListener("click", () => {
    modoAtual = (modoAtual % totalModos) + 1;
    const nomes = ["Alternado", "Aleatório", "Ondas"];
    trocarModo,textContent = `🔁 Modo: ${nomes[modoAtual - 1]}`;
    criarLuzes();
});

criarLuzes();