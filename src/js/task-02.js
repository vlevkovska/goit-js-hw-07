const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  const listEl = document.querySelector('#ingredients');
  listEl.appendChild(itemEl);
  elements.push(itemEl);
}
console.log(elements);

// const elements = ingredients.map(option => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = option;
//   const listEl = document.querySelector('#ingredients');
//   listEl.appendChild(itemEl);
//   return itemEl;
// });
// console.log(elements);
