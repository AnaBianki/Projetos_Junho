const form = document.getElementById("formCofrinho");
const input = document.getElementById("valor");
const totalSpan = document.getElementById("total");
const lista = document.getElementById("listaValores");
const resetarBtn = document.getElementById("resetar");
const toggleTheme = document.getElementById("toggleTheme");

let valores = [];
function atualizarInterface() {
    const total = valores.reduce((soma, v) =>  soma + v, 0);
    totalSpan.textContent = total.toFixed(2);

    lista.innerHTML = "";
    valores.forEach((v, i) => {
        const li = document.createElement("li");
        li.textContent = `+ R$ ${v.toFixed(2)}`;
        lista.appendChild(li);
    });
}
form.addEventListener("submit", e => {
    e.preventDefault();
    const valor = parseFloat(input.value);
    if (!isNaN(valor) && valor > 0) {
        valores.push(valor);
        atualizarInterface();
        form.reset();
        input.focus();
    }
});
resetarBtn.addEventListener("click", () => {
    if (confirm("Deseja mesmo esvaziar o cofrinho?")) {
        valores = [];
        atualizarInterface();
    }
});
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
atualizarInterface();