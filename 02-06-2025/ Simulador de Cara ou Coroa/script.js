const moeda = document.getElementById("moeda");
const jogarBtn = document.getElementById("jogarBtn");
const caraContador = document.getElementById("caraContador");
const coroaContador = document.getElementById("coroaContador");
const toggleTheme = document.getElementById("toggleTheme");

let cara = 0;
let coroa = 0;

jogarBtn.addEventListener("click", () => {
    const resultado = Math.random() < 0.5 ? "cara" : "coroa";

    if (resultado === "cara") {
        moeda.textContent = "😃";
        cara++;
        caraContador.textContent = cara;
    } else {
        moeda.textContent = "🪙";
        coroa++;
        coroaContador.textContent = coroa;
    }
    moeda.classList.add("animar");
    setTimeout(() => moeda.classList.remove("animar"), 300);
});

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});