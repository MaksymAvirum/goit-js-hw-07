const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    if (elements.email.value.trim() == 0 || elements.password.value.trim() == 0) {
        alert('All form fields must be filled in');
        return;
    }
    const formObject = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    };

    console.log(formObject);
    event.target.reset();
}
