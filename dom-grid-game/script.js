function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const numSquares = document.querySelectorAll('.square').length;
let itId = getRandomInt(0, numSquares);
console.log(`it ID = ${itId}.`);
const squares = document.querySelectorAll('.square');
squares.forEach((cell, index) => {
    if (index === itId) {
        cell.id = 'it';
    }
})

function squareClicked() {
    if (this.id === "it") {
        itClicked();
        this.classList.add('it');
    } else {
        this.classList.remove('unclicked');
        this.classList.add('clicked');
    }
}

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener('click', squareClicked); //don't include () after function name or will run automatically
    item.classList.add('unclicked');
})

function itClicked() {
    const clicked = document.querySelectorAll('.clicked');
    for (let square of clicked) {
        square.classList.remove('clicked');
        square.classList.add('gameOver');
    }
    const unclicked = document.querySelectorAll('.unclicked');
    for (let square of unclicked) {
        square.removeEventListener('click', squareClicked);
    }
}