const inputItem = document.querySelector('input');
const textName = document.querySelector('span');

inputItem.addEventListener('input', event => {
    if (event.target.value.trim().length > 0) {
        textName.textContent = event.target.value.trim();
    } else {
        textName.textContent = 'Anonymous';
    }
});
