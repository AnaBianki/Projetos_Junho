const animais = [
  // CÃES
  { tipo: 'cachorro', nome: 'Bob', idade: '2 meses', castrado: 'Sim', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao1.jpg' },
  { tipo: 'cachorro', nome: 'Amorinha', idade: '1 mes', castrado: 'Não', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao2.jpg' },
  { tipo: 'cachorro', nome: 'Max', idade: '4 meses', castrado: 'Sim', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao3.jpg' },
  { tipo: 'cachorro', nome: 'Suzy', idade: '5 meses', castrado: 'Não', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao4.jpg' },
  { tipo: 'cachorro', nome: 'Pulguinha', idade: '2 anos', castrado: 'Sim', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao5.jpg' },
  { tipo: 'cachorro', nome: 'Nenê', idade: '2 meses', castrado: 'Não', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao6.jpg' },
  { tipo: 'cachorro', nome: 'Maggie', idade: '2 anos', castrado: 'Sim', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao7.jpg' },
  { tipo: 'cachorro', nome: 'Oreo', idade: '8 meses', castrado: 'Não', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao8.jpg' },
  { tipo: 'cachorro', nome: 'Cacau', idade: '3 anos', castrado: 'Não', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao9.jpg' },
  { tipo: 'cachorro', nome: 'Pipu', idade: '1 mes', castrado: 'Não', bairro: 'Bairro Y', cidade: 'São Paulo', imagem: 'imagens/cao10.jpg' },

  // GATOS
  { tipo: 'gato', nome: 'Gato 1', idade: '5 meses', castrado: 'Sim', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato1.jpg' },
  { tipo: 'gato', nome: 'Gato 2', idade: '6 meses', castrado: 'Não', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato2.jpg' },
  { tipo: 'gato', nome: 'Gato 3', idade: '7 meses', castrado: 'Sim', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato3.jpg' },
  { tipo: 'gato', nome: 'Gato 4', idade: '8 meses', castrado: 'Não', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato4.jpg' },
  { tipo: 'gato', nome: 'Gato 5', idade: '9 meses', castrado: 'Sim', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato5.jpg' },
  { tipo: 'gato', nome: 'Gato 6', idade: '10 meses', castrado: 'Não', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato6.jpg' },
  { tipo: 'gato', nome: 'Gato 7', idade: '11 meses', castrado: 'Sim', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato7.jpg' },
  { tipo: 'gato', nome: 'Gato 8', idade: '12 meses', castrado: 'Não', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato8.jpg' },
  { tipo: 'gato', nome: 'Gato 9', idade: '13 meses', castrado: 'Sim', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato9.jpg' },
  { tipo: 'gato', nome: 'Gato 10', idade: '14 meses', castrado: 'Não', bairro: 'Bairro X', cidade: 'São Paulo', imagem: 'imagens/gato10.jpg' }
];

function mostrarAnimais(tipo) {
  const lista = document.getElementById('listaAnimais');
  lista.innerHTML = '';

  const filtrados = animais.filter(a => a.tipo === tipo);

  filtrados.forEach(animal => {
    const div = document.createElement('div');
    div.className = 'animal';
    div.innerHTML = `
      <img src="${animal.imagem}" alt="${animal.nome}">
      <strong>${animal.nome}</strong><br>
      Idade: ${animal.idade}<br>
      Castrado: ${animal.castrado}<br>
      Bairro: ${animal.bairro}<br>
      Cidade: ${animal.cidade}
    `;
    lista.appendChild(div);
  });
}

let gatosVisiveis = false;
let caesVisiveis = false;

const btnGatos = document.getElementById('btnGatos');
const btnCaes = document.getElementById('btnCaes');
const listaAnimais = document.getElementById('listaAnimais');

btnGatos.addEventListener('click', () => {
  if (gatosVisiveis) {
    listaAnimais.innerHTML = '';
    gatosVisiveis = false;
  } else {
    mostrarAnimais('gato');
    gatosVisiveis = true;
    caesVisiveis = false;
  }
});

btnCaes.addEventListener('click', () => {
  if (caesVisiveis) {
    listaAnimais.innerHTML = '';
    caesVisiveis = false;
  } else {
    mostrarAnimais('cachorro');
    caesVisiveis = true;
    gatosVisiveis = false;
  }
});

// Menu lateral abrir/fechar
    function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }

