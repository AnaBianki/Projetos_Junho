const animais = [
  // CÃES
  { tipo: 'cachorro', nome: 'Biscoito', idade: '2 meses', castrado: 'Sim', bairro: 'Belém Novo', cidade: 'Porto Alegre', imagem: 'imagens/cao1.jpg' },
  { tipo: 'cachorro', nome: 'Pantufa', idade: '5 meses', castrado: 'Sim', bairro: 'Lami', cidade: 'Porto Alegre', imagem: 'imagens/cao2.jpg' },
  { tipo: 'cachorro', nome: 'Paçoca', idade: '4 meses', castrado: 'Sim', bairro: 'Nonoai', cidade: 'Porto Alegre', imagem: 'imagens/cao3.jpg' },
  { tipo: 'cachorro', nome: 'Thor', idade: '5 meses', castrado: 'Sim', bairro: 'Cavalhada', cidade: 'Porto Alegre', imagem: 'imagens/cao4.jpg' },
  { tipo: 'cachorro', nome: 'Pipo', idade: '2 anos', castrado: 'Sim', bairro: 'Cohab', cidade: 'Porto Alegre', imagem: 'imagens/cao5.jpg' },
  { tipo: 'cachorro', nome: 'Nenê', idade: '1 ano', castrado: 'Sim', bairro: 'Restinga', cidade: 'Porto Alegre', imagem: 'imagens/cao6.jpg' },
  { tipo: 'cachorro', nome: 'Hope', idade: '2 anos', castrado: 'Sim', bairro: 'Teresópolis', cidade: 'Porto Alegre', imagem: 'imagens/cao7.jpg' },
  { tipo: 'cachorro', nome: 'Oreo', idade: '4 meses', castrado: 'Sim', bairro: 'Lageado', cidade: 'Porto Alegre', imagem: 'imagens/cao8.jpg' },
  { tipo: 'cachorro', nome: 'Cacau', idade: '2 anos', castrado: 'Sim', bairro: 'Belem Velho', cidade: 'Porto Alegre', imagem: 'imagens/cao9.jpg' },
  { tipo: 'cachorro', nome: 'Bob', idade: '1 ano', castrado: 'Sim', bairro: 'Cavalhada', cidade: 'Porto Alegre', imagem: 'imagens/cao10.jpg' },

  // GATOS
  { tipo: 'gato', nome: 'Amora', idade: '2 meses', castrado: 'Sim', bairro: 'Belém Novo', cidade: 'Porto Alegres', imagem: 'imagens/gato1.jpg' },
  { tipo: 'gato', nome: 'Lua', idade: '3 anos', castrado: 'Sim', bairro: 'Lami', cidade: 'Porto Alegre', imagem: 'imagens/gato2.jpg' },
  { tipo: 'gato', nome: 'Mingau', idade: '7 meses', castrado: 'Sim', bairro: 'Lageado', cidade: 'Porto Alegre', imagem: 'imagens/gato3.jpg' },
  { tipo: 'gato', nome: 'Piper', idade: '3 meses', castrado: 'Sim', bairro: 'Nonoai', cidade: 'Porto Alegre', imagem: 'imagens/gato4.jpg' },
  { tipo: 'gato', nome: 'Lola', idade: '2 meses', castrado: 'Sim', bairro: 'Campo Novo', cidade: 'Porto Alegre', imagem: 'imagens/gato5.jpg' },
  { tipo: 'gato', nome: 'Mel', idade: '1 ano', castrado: 'Sim', bairro: 'Vila Nova', cidade: 'Porto Alegre', imagem: 'imagens/gato6.jpg' },
  { tipo: 'gato', nome: 'Tiramisu', idade: '11 meses', castrado: 'Sim', bairro: 'Vila Nova', cidade: 'Porto Alegre', imagem: 'imagens/gato7.jpg' },
  { tipo: 'gato', nome: 'Sam', idade: '5 meses', castrado: 'Sim', bairro: 'Restinga', cidade: 'Porto Alegre', imagem: 'imagens/gato8.jpg' },
  { tipo: 'gato', nome: 'Chico', idade: '4 anos', castrado: 'Sim', bairro: 'Belém Novo', cidade: 'Porto Alegre', imagem: 'imagens/gato9.jpg' },
  { tipo: 'gato', nome: 'Tulipa', idade: '1 ano', castrado: 'Sim', bairro: 'Lami', cidade: 'Porto Alegre', imagem: 'imagens/gato10.jpg' }
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

// Galeria de imagens Boomerang
const gallery = document.querySelector('.gallery');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let scrollAmount = 0;
const scrollStep = 320; // pixels por clique — ajuste se quiser

nextButton.addEventListener('click', () => {
  gallery.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

prevButton.addEventListener('click', () => {
  gallery.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});