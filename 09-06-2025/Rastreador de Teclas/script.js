const tecla = document.getElementById("tecla")
const codigo = document.getElementById("codigo")
const shift = document.getElementById("shift")
const ctrl = document.getElementById("ctrl")
const alt = document.getElementById("alt")
const toggleTheme = document.getElementById("toggleTheme")




document.addEventListener("keydown", (e) => {
tecla.textContent = e.key === " " ? "Espaço" : e.key;
codigo.textContent = e.code;
shift.textContent = e.shiftKey;
ctrl.textContent = e.ctrlKey;
alt.textContent = e.altKey;


tecla.classList.add("ativo");
setTimeout(() => tecla.classList.remove("ativo"), 100);
});


toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent =
  document.body.classList.contains("dark") ? "☀️" : "🌙";
});

