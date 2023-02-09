let myEmptyDiv = document.querySelector('#myEmptyDiv');
let heading = document.createElement('h1');


heading.innerHTML = 'Llamas';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick() {
    console.log('clicked');
    document.body.style.backgroundColor = 'blue';
}

