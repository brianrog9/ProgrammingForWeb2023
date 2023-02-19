const DOWN = 'down';
const UP = 'up';
const gameState = {
    totalPairs: 5,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let startingX = 130;
let startingY = 100;
let cards = [];
let cardBack;
let cardFaceArray = [];


function preload() {
    cardBack = loadImage('img/CardBack.PNG');
    cardFaceArray = [
        loadImage('img/Chest.PNG'),
        loadImage('img/Coin.PNG'),
        loadImage('img/flower.PNG'),
        loadImage('img/Mushroom.PNG'),
        loadImage('img/Star.PNG'),
    ]   
}

function setup() {
    createCanvas(1500, 1000);
    let selectedFaces = [];
    for (let z = 0; z < 5; z++){
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it is not selected again
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 5; i++) {
            const cardFaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImg));
            startingX += 250;
        }
        startingY += 350;
        startingX = 130;
    }
}

function draw () {
    background(0);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        text('You Win!', 650, 70);
        noLoop();
    }
    for (let r =0; r < cards.length; r++) {
        if(!cards[r].isMatch){
            cards[r].face = DOWN;
        }
        cards[r].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('attempts ' + gameState.attempts, 650, 850);
    text('matches ' + gameState.numMatched, 650, 950);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let j = 0; j < cards.length; j++) {
        // first check flippedCards length and then we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[j].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(cards[j]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match! time to score
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 300;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show () {
        if (this.face === UP || this.isMatch){
            fill('yellow');
            rect(this.x, this.y, this.width, this,height);
            image(this.cardFaceImg, this.x, this.y, this.width, this.height);
        } else {
            fill('red');
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y, this.width, this.height);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    } 
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;  
    }
    return array;
}