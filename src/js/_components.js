// burger
const burger = document.querySelector('.burger-menu')
const menu = document.querySelector('.nav__list')
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})

// scroll
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');
