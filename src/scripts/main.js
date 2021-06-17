const script = document.createElement('script');
script.type = 'text/javascript';
document.body.appendChild(script);

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const heroElement = document.querySelector('.hero');
const navLink = document.querySelectorAll('.nav__link');
const mainElement = document.querySelector('#mainContent');
const footerElement = document.querySelector('footer');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
});

navLink.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navList.classList.remove('open');
  });
});

heroElement.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navList.classList.remove('open');
});

mainElement.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navList.classList.remove('open');
});

footerElement.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navList.classList.remove('open');
});
