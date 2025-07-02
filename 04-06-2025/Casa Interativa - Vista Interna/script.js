let luzesLigadas = false;
let portaAberta = false;
let tvLigada = false;
let luzTetoPrincipal = false;
let cortinasAbertas = true;
let abajurLigado = false;

function toggleLuzes() {
    luzesLigadas = !luzesLigadas;
    document.getElementById('janela1').classList.toggle('acesa');
    document.getElementById('janela2').classList.toggle('acesa');
}

function togglePorta() {
    portaAberta = !portaAberta;
    document.getElementById('porta').classList.toggle('aberta');
}

function toggleTV() {
    tvLigada = !tvLigada;
    document.getElementById('tv').classList.toggle('ligada');
}

function toggleLuzTeto() {
    luzTetoPrincipal = !luzTetoPrincipal;
    document.getElementById('luz-teto').classList.toggle('acesa');
}

function toggleCortinas() {
    cortinasAbertas = !cortinasAbertas;
    document.querySelectorAll('.cortina').forEach(cortina => {
        cortina.classList.toggle('fechada');
    });
}

function toggleAbajur() {
    abajurLigado = !abajurLigado;
    document.getElementById('abajur').classList.toggle('aceso');
}

console.log('Script loaded');
