const toggleTheme = document.getElementById("toggleTheme");

function gerarCorAleatoria() {
    const h = Math.floor(Math.random() * 360);
    return `hsl(${h}, 70%, 80%)`;
}

function iniciarBackgroundDinamico() {
    setInterval(() => {
        document.body.style.backgroundColor = gerarCorAleatoria();
    }, 1000);
}
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = 
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
iniciarBackgroundDinamico();