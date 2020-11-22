const list = document.getElementById('list');
const input = document.getElementById('name');

function addListItem(e) {
    const pTags = document.querySelectorAll('p');
    console.log(pTags);
    pTags.forEach(p => p.addEventListener('click', (e) => console.log(e)));
}

function addPTag(e) {
    const pTag = document.createElement('p');
    pTag.innerText = 'new';
    document.body.append(pTag);
}