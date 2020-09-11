const menu = document.querySelector('.hamburger__button');
const showNav = document.querySelector('.hamburger__content')

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  showNav.classList.toggle('open')
});


function openNav() {
  document.getElementById("mobile-options").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-options").style.width = "0";
}