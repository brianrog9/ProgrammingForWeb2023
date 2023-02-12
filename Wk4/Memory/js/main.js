let myCards = [];
let startX = 130;
let startY = 100;
let startId = 0;

function setup() {
    createCanvas(1700, 1000);
    background(0);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 6; i++) {
            rect (startX, startY, 200, 300);
            myCards.push({
                x: startX, y: startY, id: startId
            });
            startX += 250;
            startId++;
        }
        startY += 350;
        startX = 130;
    }
    console.log(myCards);
}