import './styles.scss';

const burgerMenuButton = document.getElementById('burgerMenuButton');
const navBar = document.getElementById('navBar');

burgerMenuButton.addEventListener('click', onBurgerMenuClick);

function onBurgerMenuClick() {
    this.classList.toggle('burger-menu-active');
    navBar.classList.toggle('nav-bar-open');
}