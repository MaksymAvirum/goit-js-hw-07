function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor() {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;

  console.log(randomColor);  // контроль відпрацювання
}
