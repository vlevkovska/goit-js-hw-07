const input = document.querySelector('#validation-input');
const validLength = parseInt(input.dataset.length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === validLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
