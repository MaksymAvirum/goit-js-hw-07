const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    if (elements.email.value == 0 || elements.password.value == 0) {
        alert('All form fields must be filled in');
    }
    const formObject = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    };

    console.log(formObject);
    event.target.reset();
}
