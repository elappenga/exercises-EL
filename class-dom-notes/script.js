//Add inner text to a div with ID 'area'
let el = document.getElementById('area')
el.innerText = 'here is new text';
el.innerText += ' and a bit more text';

//Use querySelector to add new innerText to element with id of 'area'
document.querySelector('#area').innerText = 'here is brand new text';

//Use querySelectorAll to add innerText to all elements with id of 'query'
const queryClass = document.querySelectorAll('#query'); //creates an array of the elements
console.log(queryClass);

for (let element of queryClass) {
    element.innerText = 'here is the text times 3';
    //adds the innerText to each element in the array
    element.innerHTML = 'here is the text <em>emphasized</em> 3 times';
    //changes the HTML of the elements to be bolded.
} 

//Declare a variable that will find elements with id of "top-nav"
let nav = document.getElementById("top-nav");

console.log(nav);

//Find all elements with class 'list-class'
console.log(document.querySelectorAll('.list-class'));

//Declare a variable that finds an element by id 'test'
const elt = document.getElementById('test');

//replace the content of the element
elt.textContent = 'end';

//Add a class to an element's (or variable's elements') classList
elt.classList.add('red-background');
//Could add multiple classes at once by separating with a comma
//Can remove classes from the list using .remove
//Can use .toggle to turn it on or off based on current state (it's add and remove at once)

elt.style.color = "white";

//Declare a variable that finds an element by id 'test'
const aEl = document.getElementById('a-link');

//Set the attribute of the element with the given id
aEl.setAttribute('href', 'https://google.com');

//create an element on the page and specify what kind of tag it should be
const head = document.createElement('div');
//style the new element
head.style.backgroundColor = "crimson";
head.innerText = 'here is the text created in my new div';
//push the new element to the page in to the element with id 'container'
container.append(head);

//create a function that will log a mouse click in a given location when the function is called
function clickText(event) {
    console.log(event);
    console.log('clicked');
}

//create an event listener that will run the clickText function when given element
//is clicked
const text = document.getElementById('text');
text.addEventListener('click', clickText);

//create a list and remove the items when clicked
function makeList() {
    const unorderedList = document.getElementById('unordered-list');
    const input = document.getElementById('list-item');
    const inputValue = input.nodeValue;
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;
    listItem.addEventListener('click', (event) => event.target.removeEventListener());
    unorderedList.append(listItem);
}