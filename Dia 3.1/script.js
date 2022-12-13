function funcao(){
  var botao = document.querySelector('#botao');
  var card = document.querySelector('.card');

  if (card.style.opacity === '1') {
    card.style.opacity = '0';
  } else {
    card.style.opacity = '1';
  }
};