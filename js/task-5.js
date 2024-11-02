function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btnChangeColour = document.querySelector(".change-color");
const span = document.querySelector(".color")

btnChangeColour.addEventListener("click", changeColour);

function changeColour() {
  const newColor = getRandomHexColor(); 
  body.style.backgroundColor = newColor; 
  span.textContent = newColor; 
}