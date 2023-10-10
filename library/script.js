//burger-menu

const burgerMenu = document.querySelector('.header__burger-menu');
const navList = document.querySelector('.navigation__list');
const navListItems = document.querySelectorAll('.navigation__list-item');
const burgerOverlay = document.querySelector('.header__overlay');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navList.classList.toggle('active');
  document.body.classList.toggle('lock');
  burgerOverlay.classList.toggle('active');
});

navListItems.forEach(navListItem => {
  navListItem.addEventListener('click', () => {
    document.body.classList.remove('lock');
    burgerMenu.classList.remove('active');
    navList.classList.remove('active');
    burgerOverlay.classList.remove('active');
  })
});

burgerOverlay.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
  navList.classList.remove('active');
  document.body.classList.remove('lock');
  burgerOverlay.classList.remove('active');
})
