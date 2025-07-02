let score = 0;
const scoreDisplay = document.getElementById("score");
const trapButton = document.getElementById("trapButton");

trapButton.addEventListener("click", () => {
    score = Math.max(0, score - 5);
    scoreDisplay.textContent = score;
    alert("Você clicou! -5 pontos.");
});

setInterval(() => {
    score++;
    scoreDisplay.textContent = score;
}, 1000);