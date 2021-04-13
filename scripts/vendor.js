let hamburgerMenu = document.querySelector(".hamburger-wrapper");
let menuContainer = document.querySelector(".menu-container");

hamburgerMenu.addEventListener('click', () => {
    menuContainer.classList.toggle("display");
})