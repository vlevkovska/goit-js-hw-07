const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const makeIngredientItemEl = item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  return itemEl;
};
const ingredientsElArray = ingredients.map(ingredient => makeIngredientItemEl(ingredient));

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsElArray);

//===== ВАРІАНТ 2 =====
// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];
//   const itemEl = document.createElement('li');
//   itemEl.textContent = option;
//   const listEl = document.querySelector('#ingredients');
//   listEl.appendChild(itemEl);
//   elements.push(itemEl);
// }
// console.log(elements);

//===== ИЛИ ЧЕРЕЗ MAP =====

// const elements = ingredients.map(option => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = option;
//   const listEl = document.querySelector('#ingredients');
//   listEl.appendChild(itemEl);
//   return itemEl;
// });
// console.log(elements);
