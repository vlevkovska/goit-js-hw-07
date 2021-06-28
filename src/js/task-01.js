const allCategoriesE1 = document.querySelectorAll('li.item');
const numberCategories = allCategoriesE1.length;
console.log('В списке', numberCategories, 'категрии.');

const titleEl = document.querySelectorAll('h2');
console.log('Категория:', titleEl[0].textContent);
const lastListEl = document.querySelectorAll('li.item');
const zeroListEl = lastListEl[0].lastElementChild;
const zeroNumberListEl = zeroListEl.children.length;
console.log('Количество элементов:', zeroNumberListEl);

console.log('Категория:', titleEl[1].textContent);
const firstListEl = lastListEl[1].lastElementChild;
const firstNumberListEl = firstListEl.children.length;
console.log('Количество элементов:', firstNumberListEl);

console.log('Категория:', titleEl[2].textContent);
const secondListEl = lastListEl[2].lastElementChild;
const secondNumberListEl = secondListEl.children.length;
console.log('Количество элементов:', secondNumberListEl);
