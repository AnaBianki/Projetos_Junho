const botao = document.getElementById('botaoFujao');

botao.addEventListener('mouseenter', () => {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const novaPosX = Math.random() * (larguraTela - botao.offsetWidth);
    const novaPosY = Math.random() * (alturaTela - botao.offsetHeight);

    botao.style.left = `${novaPosX}px`;
    botao.style.top = `${novaPosY}px`;
});