import throttle from "lodash.throttle";

const refs = {
form: document.querySelector('.feedback-form'),
input: document.querySelector('input'),
textarea: document.querySelector('textarea'),
};

const KEY_STRING = 'feedback-form-state';
const formData = {};
const addData = localStorage.getItem(KEY_STRING);
fillingInput()

function fillingInput() {
    if (JSON.parse(addData)) {
        console.log(JSON.parse(addData))
        refs.input.value = JSON.parse(addData).email;
        refs.textarea.value = JSON.parse(addData).message; 
    }
}

refs.form.addEventListener('submit', (removeFormInput));
function removeFormInput(event) {
    event.preventDefault();
    console.log(JSON.parse(addData));
    event.currentTarget.reset();
    localStorage.removeItem(KEY_STRING);
}

refs.form.addEventListener('input', throttle(updateInput, 500));
function updateInput(event) {
    // console.log(event.target)
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY_STRING, JSON.stringify(formData));
}