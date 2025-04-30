const navText = document.querySelector('.nav-menu__list');
const navTextList = document.querySelector('.nav-menu__rec')
const listaMotion = document.querySelector('.submenu--motion');
const listaRec = document.querySelector('.submenu--resources')

const inputEmail = document.getElementById('content__input-text');
const clickBotaoInput = document.getElementById('content__input-go');

navText.addEventListener('mouseover', () => {
  if(listaMotion.style.display === 'none') {
    listaMotion.style.display = 'block';
  } else {
    listaMotion.style.display = 'none';
  }
  navText.addEventListener('mouseout', () => {
    listaMotion.style.display = 'none';
  })
})

navTextList.addEventListener('mouseover', () => {
  if(listaRec.style.display === 'none') {
    listaRec.style.display = 'block';
  } else {
    listaRec.style.display = 'none';
  }
  navTextList.addEventListener('mouseout', () => {
    listaRec.style.display = 'none';
  })
})

inputEmail.addEventListener('keypress', (evento) => {
  if(evento.key === 'Enter') {
    inputEmail.value = "";
  }
})

clickBotaoInput.addEventListener('click', (evento) => {
  inputEmail.value = "";
})
