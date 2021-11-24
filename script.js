const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const lista = document.getElementsByTagName('ol');
const quadroCentral = document.getElementById('quadro-central');
const listaLi = document.getElementsByTagName('li');
const liClass = document.getElementsByClassName('completed');
const buttonBar = document.getElementById('barra-botoes');

// Função para criar os itens da lista de tarefas

function creat() {
  const text = document.createElement('li');
  text.innerText = textoTarefa.value;
  if (text.innerText !== '') {
    text.style.height = '20px';
    text.style.marginLeft = '15px';
    text.style.lineHeight = '20px';
    lista[0].appendChild(text);
    textoTarefa.value = '';
    quadroCentral.style.height = `${String(quadroCentral.offsetHeight + 20)}px`;
  } else {
    alert('Digite uma terefa');
  }
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

// Função para colocar a classe "completed" em um item clicado duas vezes e riscar o item na lista

function addClass(event) {
  const liClicada = event.target;
  if (liClicada.tagName === 'LI' && liClicada.className === 'completed') {
    liClicada.className = '';
    liClicada.style.textDecoration = 'none';
  } else if (liClicada.tagName === 'LI') {
    liClicada.className = 'completed';
    liClicada.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}

document.addEventListener('dblclick', addClass);

// Função que adiciona o botão para apagar todas as li´s

function addButtonClear() {
  const buttonClear = document.createElement('button');

  buttonClear.innerText = 'Limpar Lista';
  buttonClear.id = 'apaga-tudo';
  buttonClear.style.paddingLeft = '20px';
  buttonClear.style.paddingRight = '20px';
  buttonClear.style.border = 'none';
  buttonClear.style.color = 'white';
  buttonClear.style.backgroundColor = 'red';
  buttonClear.style.paddingTop = '7px';
  buttonClear.style.paddingBottom = '7px';
  buttonClear.style.borderRadius = '10px';

  buttonBar.appendChild(buttonClear);
}

addButtonClear();

// Função para remover toda a lista de li´s

function liClear() {
  for (;listaLi.length > 0;) {
    lista[0].removeChild(listaLi[0]);
    quadroCentral.style.height = `${String(quadroCentral.offsetHeight - 20)}px`;
  }
}

const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', liClear);

// Função que adiciona o botão para apagar as li´s com a classe "completed"

function addButtonClearCompleted() {
  const buttonClear2 = document.createElement('button');

  buttonClear2.innerText = 'Limpar Completos';
  buttonClear2.id = 'remover-finalizados';
  buttonClear2.style.paddingLeft = '20px';
  buttonClear2.style.paddingRight = '20px';
  buttonClear2.style.border = 'none';
  buttonClear2.style.color = 'white';
  buttonClear2.style.backgroundColor = 'blue';
  buttonClear2.style.paddingTop = '7px';
  buttonClear2.style.paddingBottom = '7px';
  buttonClear2.style.borderRadius = '10px';
  buttonClear2.style.marginLeft = '50px';

  buttonBar.appendChild(buttonClear2);
}

addButtonClearCompleted();

// Função para remover apenas as li´s com a classe "completed"

function liClearCompleted() {
  for (let i = 0; i < listaLi.length; i += 1) {
    if (listaLi[i].className === 'completed') {
      lista[0].removeChild(listaLi[i]);
      quadroCentral.style.height = `${String(quadroCentral.offsetHeight - 20)}px`;
    }
  }
}

const buttonClear2 = document.getElementById('remover-finalizados');
buttonClear2.addEventListener('click', liClearCompleted);
