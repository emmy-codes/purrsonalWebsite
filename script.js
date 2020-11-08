let startMenu = document.querySelector(".start-menu");
let openStartMenu = document.querySelector(".start-button");

function openMenu() {
    if (startMenu.classList.contains('hidden')) {
        startMenu.classList.remove('hidden')
    } else {
        startMenu.classList.add('hidden')
    };
}
openStartMenu.addEventListener("click", openMenu);