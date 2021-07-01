const itemsElQuantity = document.querySelector('#categories').children.length;
console.log(`В списке ${itemsElQuantity} категории.`);

const itemsElArray = document.querySelectorAll('.item');
// console.log(itemsElArray);
itemsElArray.forEach(item => {
  console.log('Категория: ', item.firstElementChild.textContent);
  console.log('Количество элементов: ', item.querySelectorAll('li').length);
});

// ===== ВАРІАНТ 2 =====
// const allCategoriesE1 = document.querySelectorAll('li.item');
// const numberCategories = allCategoriesE1.length;
// console.log('В списке', numberCategories, 'категории.');

// const titleEl = document.querySelectorAll('h2');
// console.log('Категория:', titleEl[0].textContent);
// const lastListEl = document.querySelectorAll('li.item');
// const zeroListEl = lastListEl[0].lastElementChild;
// const zeroNumberListEl = zeroListEl.children.length;
// console.log('Количество элементов:', zeroNumberListEl);

// console.log('Категория:', titleEl[1].textContent);
// const firstListEl = lastListEl[1].lastElementChild;
// const firstNumberListEl = firstListEl.children.length;
// console.log('Количество элементов:', firstNumberListEl);

// console.log('Категория:', titleEl[2].textContent);
// const secondListEl = lastListEl[2].lastElementChild;
// const secondNumberListEl = secondListEl.children.length;
// console.log('Количество элементов:', secondNumberListEl);
