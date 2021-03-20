const output = document.getElementById('mouse-location');
const circle = document.getElementById('circle');
document.addEventListener('mousemove', moveMouse);

function moveMouse(e) {
    // output.innerHTML = '<h3>MouseX: '+e.clientX+'</h3><h3>MouseY: '+e.clientY+'</h3';
    circle.style.position = 'absolute';
    circle.style.left = e.pageX+'px'; //clientX also works
    circle.style.top = e.pageY+'px'; //clientY also works
}