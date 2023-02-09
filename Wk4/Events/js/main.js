let rectX = 0;
let rectY;
const rectHeight = 50;
let rectWidth = 50;
let clickCount = 0;
let speed;

function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 6);
}

function draw() {
    background('#2c3563');
    drawShape();
    rectX += speed;
    if (rectX > width + 5) {
        noLoop();
        text('Your Score Was ' + clickCount, 200, 50);
    }

}

function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount ++;
        console.log('clicked', clickCount);
    }
}

function drawShape() {
    fill ('#fa9248')
    rect (rectX, rectY, rectWidth, rectHeight);
    console.log(rectX); //check if stops
}

