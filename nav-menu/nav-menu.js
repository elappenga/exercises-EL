//Show and hide menu when clicking burger button
const menu = document.getElementById('button-wrapper').addEventListener
('click', menuClick);

function menuClick() {
    console.log('menu clicked');
    const myDropdown = document.getElementById('myDropdown');
    myDropdown.classList.toggle('hide');
}

const menuLetters = document.getElementById('menuLetters').addEventListener('click', lettersClicked);

const menuNumbers = document.getElementById('menuNumbers').addEventListener('click', numbersClicked);

function lettersClicked(e) {
    e.preventDefault();
    console.log('letters clicked');
    const numbers = document.getElementById('numbers');
    const letters = document.getElementById('letters');
    numbers.classList.add('hide');
    letters.classList.remove('hide');
}

function numbersClicked(e) {
    e.preventDefault();
    console.log('numbers clicked');
    const numbers = document.getElementById('numbers');
    const letters = document.getElementById('letters');
    numbers.classList.remove('hide');
    letters.classList.add('hide');
}