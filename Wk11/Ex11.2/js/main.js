let bubbles = [];


function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 2900; i++) {
        bubbles[i] = new Bubble ();
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
        bubbles[i].show2();
    }
}

class Bubble {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(10, 30);
        this.speed = 2;
    }
    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-1, 2);
        if (this.y > 520){
            this.y = random(0, 10);
        }
    }
    show() {
        noStroke();
        fill(255, 204, 0, 70);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    show2() {
        noStroke();
        fill(255, 100, 40, 40);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  
}

function mousePressed() {
    noLoop();  
}