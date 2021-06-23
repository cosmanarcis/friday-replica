const hamburger = document.querySelector('.nav__hamburger');
const header = document.querySelector('.menu__hidden');
const closeNav = document.querySelector('.menu__side-close');
const container = document.querySelector('.menu__container');
hamburger.addEventListener('click', () => {
    header.classList.toggle('menu__is-visible'),
        container.classList.add('container__is-visible');
});

closeNav.addEventListener('click', () => {
    header.classList.remove('menu__is-visible'),
        container.classList.remove('container__is-visible');
});