const inputItem = document.querySelector('#name-input');
const textName = document.querySelector('#name-output');

inputItem.addEventListener('input', event => {
    if (event.target.value.trim().length > 0) {
        textName.textContent = event.target.value.trim();
    } else {
        textName.textContent = 'Anonymous';
    }
});
