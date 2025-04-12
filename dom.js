const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteValue = input.value;
    const newList = document.createElement('li');
    newList.textContent = noteValue;
    list.appendChild(newList);
    input.value = '';

});
