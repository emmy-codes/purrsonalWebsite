let startMenu = document.querySelector(".start-menu");
let openStartMenu = document.querySelector(".start-button");

function openMenu() {
    if (startMenu.classList.contains('hidden')) {
        startMenu.classList.remove('hidden')
        openStartMenu.classList.add('clicked-start-button');
    } else {
        startMenu.classList.add('hidden')
        openStartMenu.classList.remove('clicked-start-button');
    };
}
openStartMenu.addEventListener("click", openMenu);