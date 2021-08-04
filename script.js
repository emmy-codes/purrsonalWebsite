let startMenu = document.querySelector(".start-menu");
let openStartMenu = document.querySelector(".start-button");

function openMenu() {
  if (startMenu.classList.contains("hidden")) {
    startMenu.classList.remove("hidden");
    openStartMenu.classList.add("clicked-start-button");
  } else {
    startMenu.classList.add("hidden");
    openStartMenu.classList.remove("clicked-start-button");
  }
}
openStartMenu.addEventListener("click", openMenu);

let projectFolder = document.querySelector(".folder-body");

projectFolder.addEventListener("dblclick", function revealFolder(event) {
  const targetedDivIDs = {
    project1: "#project-one",
    project2: "#project-two",
    project3: "#project-three",
  };

  const targetedDivID = targetedDivIDs[event.target.id]; //targetedDivIDs.project1 or targetedDivIDs['project1']

  const targetedDiv = document.querySelector(targetedDivID);

  targetedDiv.classList.remove("hidden");

  event.stopPropagation();
  event.preventDefault();
});

document
  .querySelectorAll(".close-button")
  .forEach(function addHideThingyEventListener(closeButton) {
    closeButton.addEventListener("click", function hideThingy() {
      closeButton.parentNode.classList.add("hidden");
    });
  });

let openDocuments = document.querySelector("#documents");
let showFolder = document.querySelector("#opened-folder");

function viewDocuments(event) {
  showFolder.classList.remove("hidden");
}

openDocuments.addEventListener("click", viewDocuments);

function getTime() {
    const hours = new Date();
    let time = document.querySelector(".time");
    time.innerHTML = `${hours.getHours()}:${hours.getMinutes()}`;
}
setInterval(getTime, 60000);
getTime();