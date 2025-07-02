let tamanhoFonte = 16;
let contrasteAtivo = false;
let fonteAlternativa = false;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
}

function diminuirFonte() {
    tamanhoFonte = Math.max(10, tamanhoFonte - 2);
    document.body.style.fontSize = tamanhoFonte + 'px';
}
function alternarContraste() {
    contrasteAtivo = !contrasteAtivo;
    document.body.classList.toggle("alto-contraste", contrasteAtivo);
}
function alternarFonte() {
    fonteAlternativa = !fonteAlternativa;
      document.body.classList.toggle("fonte-alternativa", fonteAlternativa);
}