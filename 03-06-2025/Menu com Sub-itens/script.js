const botoesPai = document.querySelectorAll(".pai");
const toggleTheme = document.getElementById("toggleTheme");

botoesPai.forEach(botao => {
    botao.addEventListener("click", () => {
        const item = botao.parentElement;
        item.classList.toggle("ativo");
    });
});

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});