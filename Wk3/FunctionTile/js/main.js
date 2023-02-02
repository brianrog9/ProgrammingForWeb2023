let background = ('#f564a5');
let trianglecolor = ('#62f0bc');
let linecolor = ('#ffd7c9');
let circlecolor = ('#161b59');
let circleoutline = ('#8bbbe8');

function setup() {
    createCanvas(200, 200);
};

function createTile() {
    translate (0, 0);
    fill (background);
    rect (0, 0, 200, 200);
    noStroke();
    fill(trianglecolor);
    triangle(0, 0, 200, 0, 100, 100);
    fill(trianglecolor);
    triangle(0, 200, 200, 200, 100, 100);
    stroke (linecolor);
    strokeWeight (5);
    line (100, 0, 100, 200);
    line (0, 100, 200, 100);
    noStroke();
    fill(circlecolor);
    circle(100, 100, 100);
    noFill ();
    stroke(circleoutline);
    strokeWeight(5);
    circle (100, 100, 100);
    noLoop();
};

function draw() {
    createTile();
};