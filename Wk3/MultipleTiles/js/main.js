let background = ('#f564a5');
let trianglecolor = ('#62f0bc');
let linecolor = ('#ffd7c9');
let circlecolor = ('#161b59');
let circleoutline = ('#8bbbe8');


function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, background, trianglecolor, linecolor, circlecolor, circleoutline,) {
  
    translate (originX, originY);
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
    createTile(0, 0, background, trianglecolor, linecolor, circlecolor, circleoutline);
    createTile(0, 200, 'red', trianglecolor, linecolor, 'yellow', 'lightblue');
    createTile(0, 200, 'yellow', trianglecolor, linecolor, 'pink', 'lightgreen');
    createTile(200, -400, 'green', trianglecolor, linecolor, 'maroon', 'gold');
    createTile(0, 200, 'orange', trianglecolor, linecolor, 'lightorange', 'purple');
    createTile(0, 200, 'white', trianglecolor, linecolor, 'lightyellow', 'purple');
    createTile(200, -400, 'cyan', trianglecolor, linecolor, 'lightblue', 'orange');
    createTile(0, 200, 'magenta', trianglecolor, linecolor, 'white', 'purple');
    createTile(0, 200, 'black', trianglecolor, linecolor, 'grey', 'white');
};