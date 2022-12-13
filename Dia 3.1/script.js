var botao = document.querySelector('#botao');
var card = document.querySelector('.card');

botão.addEventListener('click', function() {
  if (card.style.display === 'flex') {
    card.style.display = 'none';
  } else {
    card.style.display = 'flex';
  }
});