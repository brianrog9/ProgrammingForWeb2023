const myEmptyDiv = document.querySelector("#myEmptyDiv");
const heading = document.createElement('h1');


heading.innerHTML = 'Llamas';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick() {
    console.log('clicked');
    document.body.style.backgroundColor = 'blue';
}

