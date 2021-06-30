const refs = {
  input: document.querySelector('#name-input'),
  nameLable: document.querySelector('#name-output'),
};
refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);
refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
  console.log('Получил фокус');
}
function onInputBlur() {
  console.log('Потерял фокус');
}
function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLable.textContent = event.currentTarget.value;
}
