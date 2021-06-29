const incr = document.querySelector("[data-action='increment']");
const decr = document.querySelector("[data-action='decrement']");
const total = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  total.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  total.textContent = counterValue;
};

incr.addEventListener('click', increment);
decr.addEventListener('click', decrement);
