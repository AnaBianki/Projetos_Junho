let velocidade = 0;
const marcador = document.getElementById("marcador");
const ponteiro = document.getElementById("ponteiro");

const acelerarBtn = document.getElementById("pedal-acelerador");
const frearBtn = document.getElementById("pedal-freio");
const toggleTheme = document.getElementById("toggleTheme");

function atualizarVelocimetro() {
    marcador.textContent = `${velocidade} km/h`;


    const angulo = (velocidade / 100) * 180 - 90;
    ponteiro.style.transform =
    `translateX(-50%) rotate(${angulo}deg)`;
}
acelerarBtn.addEventListener("click", () => {
    if (velocidade < 100) {
        velocidade += 10;
        atualizarVelocimetro();
    }
});

frearBtn.addEventListener("click", () => {
    if (velocidade > 0) {
        velocidade -= 10;
        atualizarVelocimetro();
    }
});

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
atualizarVelocimetro();