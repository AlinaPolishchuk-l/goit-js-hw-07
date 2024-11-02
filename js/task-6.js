function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const box = document.querySelector("#boxes");

let sizes = 30;

createEl.addEventListener("click", createElement);
destroyEl.addEventListener("click", destroyElement);

function createElement() {
  const amount = Number(input.value);
  if (amount <= 0 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    createBoxes(amount);
  }
}

function destroyElement() {
  box.innerHTML = "";
  input.value = "";
  sizes = 30;
}

function createBoxes(amount) {
  const arr = [];

  for (let i = 0; i < amount; i++) {
    const newEl = document.createElement("div");
    newEl.style.width = `${sizes}px`;
    newEl.style.height = `${sizes}px`;
    newEl.style.backgroundColor = getRandomHexColor();

    arr.push(newEl);
    sizes += 10;
  }
  box.append(...arr);
}