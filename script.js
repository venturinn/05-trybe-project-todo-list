const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const lista = document.getElementsByTagName('ol');
const quadroCentral = document.getElementById('quadro-central');
const listaLi = document.getElementsByTagName('li');

// Função para criar os itens da lista de tarefas

function creat() {
  const text = document.createElement('li');

  text.innerText = textoTarefa.value;
  text.style.height = '20px';
  text.style.marginLeft = '15px';
  text.style.lineHeight = '20px';
  lista[0].appendChild(text);
  textoTarefa.value = '';
  quadroCentral.style.height = `${String(quadroCentral.offsetHeight + 20)}px`;
}

criarTarefa.addEventListener('click', creat);

// Função para mudar todas a li´s para o backgroundColor branco

function clearLiColor() {
  for (let i = 0; i < listaLi.length; i += 1) {
    listaLi[i].style.backgroundColor = 'white';
  }
}

// Função para colocar cor ao item da lista clicado

function liColor(event) {
  const liClicada = event.target;

  if (liClicada.tagName === 'LI') {
    clearLiColor();
    liClicada.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

document.addEventListener('click', liColor);
