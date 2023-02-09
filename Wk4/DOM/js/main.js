let myEmptyDiv = document.querySelector('#myEmptyDiv');
let heading = document.createElement('h1');


heading.innerHTML = 'A llamas lifespan is 20 years';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick() {
    console.log('clicked');
    document.body.style.backgroundColor = 'blue';
}

