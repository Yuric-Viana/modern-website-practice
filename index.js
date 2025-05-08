const navText = document.querySelector('.nav-menu__list');
const navTextList = document.querySelector('.nav-menu__rec')
const listaMotion = document.querySelector('.submenu--motion');
const listaRec = document.querySelector('.submenu--resources')

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

const inputEmail = document.getElementById('content__input-text');
const clickBotaoInput = document.getElementById('content__input-go');

inputEmail.addEventListener('keypress', (evento) => {
  if(evento.key === 'Enter') {
    inputEmail.value = "";
  }
})

clickBotaoInput.addEventListener('click', (evento) => {
  inputEmail.value = "";
})


document.querySelectorAll('.submenu__item, .nav-menu__text').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = item.getAttribute('data-target'); 
    const targetElement = document.getElementById(targetId); 
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    }
  });
});

function toggleSubmenu(selector) {
  const el = document.querySelector(selector);
  if(el) el.classList.toggle('show');
}

toggleSubmenu('.submenu--motion');

const menu = document.querySelector('.header__menu');
const headers = document.querySelector('.header__responsivo');

menu.addEventListener('click', function() {
  if (!headers) return;
  headers.classList.toggle('hidden');
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".grid__img", {
  opacity: 0,
  stagger: .1,
  scrollTrigger: {
    trigger: ".agentes__content",
    start: "top 60%",
    end: "bottom 60%", 
    scrub: 1
  }
}) 