let startMenu = document.querySelector(".start-menu");
let openStartMenu = document.querySelector(".start-button")

function openMenu() {
    
    startMenu.classList.remove("hidden");
}

openStartMenu.addEventListener("click", openMenu);