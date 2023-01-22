let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "blue");
let stroke2 = prompt("enter another basic color name in lower case", "yellow");
let bgcolor = ("#E6F8FF");
let fillcolor = ("#CAF7F0");
let snow1;
let snow2;
let snow3;
let snow4;
let snow5;
let snow6;

//let x, y;
//x = 1000 / 2;
//y = 800;

function setup(){
    createCanvas(1000, 800);
    background(bgcolor);
    snow1 = new Snow();
    snow2 = new Snow();
    snow3 = new Snow();
    snow4 = new Snow();
    snow5 = new Snow();
    snow6 = new Snow();
    snow7 = new Snow();
    snow8 = new Snow();
    snow9 = new Snow();
    snow10 = new Snow();
}

function draw() {
    fill (fillcolor);
    stroke(stroke1);
    strokeWeight(20);
    //body2
    ellipse(500, 600, 360);
    //body
    ellipse(500, 400, 270);
    //head
    ellipse(500, 200, 200);
    // hat
    stroke(stroke2);
    strokeWeight(20);
    line(400, 120, 600, 120);
    fill(stroke2);
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    //eyes pupils
    stroke(0);
    strokeWeight(30);
    point (465, 180);
    point (535, 180);
    //mouth
    noFill();
    strokeWeight(10);
    arc (480, 220, 60, 60, 0, HALF_PI);
    //snow
    strokeWeight(5);
    stroke("#E6F8FF");
    fill("#FFFFFF");
    snow1.move();
    snow1.display();
    snow2.move();
    snow2.display();
    snow3.move();
    snow3.display();
    snow4.move();
    snow4.display();
    snow5.move();
    snow5.display();
    snow6.move();
    snow6.display();
    snow7.move();
    snow7.display();
    snow8.move();
    snow8.display();
    snow9.move();
    snow9.display();
    snow10.move();
    snow10.display();

//     strokeWeight(5);
//     stroke("#E6F8FF");
//     fill("#FFFFFF");
//     ellipse(x, y, 30, 30);

//     x = x + random (-1, 1);
//     y = y + 1;
//     if (y > 810) {
//         y = 1;
//     }
}

//SNOW?
class Snow {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(20, 40);
      this.speed = 1;
    }

    move() {
        this.x += random (-this.speed, this.speed);
        this.y = this.y + 1;
        if (this.y > 820){
            this.y = random(0, 100);
        }
    }

    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}