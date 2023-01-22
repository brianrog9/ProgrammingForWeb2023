let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "blue");
let stroke2 = prompt("enter another basic color name in lower case", "yellow");
let bgcolor = ("#E6F8FF");
let fillcolor = ("#CAF7F0");
let x, y;
x = 1000 / 2;
y = 800;

function setup(){
    createCanvas(1000, 800);
    background(bgcolor);
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
    ellipse(x, y, 30, 30);

    x = x + random (-1, 1);
    y = y + 1;
    if (y > 810) {
        y = 1;
    }
}