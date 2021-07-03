let input = document.querySelector("#controls").firstElementChild;
let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.querySelector('#boxes');

const createRandomRGBcolor = () =>
  "rgb(" +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  ")";

let prevAmount = 0;

function createBoxes() {
 const divsArr = [];
 const amount = parseInt(input.value);
 if (amount > parseInt(input.min) && amount <= parseInt(input.max)) {
   let i = prevAmount;
   for (i; i < amount + prevAmount; i++) {
     divsArr.push(
      `<div style="background-color:${createRandomRGBcolor()}; width:${
        30 + i * 10
      }px; height:${30 + i * 10}px; margin:10px"></div>`
    );
 }
  
prevAmount = i;

const divsStr = divsArr.join("");
boxes.insertAdjacentHTML("beforeend", divsStr);
   } else {
     boxes.insertAdjacentHTML("afterbegin", "Please, enter number from 1 to 100");
   }
  };
  
function destroyBoxes() {
  boxes.innerHTML = ''; // Очистить
}

render.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);
