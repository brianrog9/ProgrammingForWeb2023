var mySound;
var x = 200;
function preload() {
  mySound = loadSound('doorbell.wav');
}


function setup() {
  createCanvas(400,400);
}


function draw() {
background(0);
ellipse(x,x,x,x);
ellipseMode(CENTER);
textSize(15);
text('ding dong',170,200);
textStyle(BOLD);
textFont('Roboto');
}
  

function mousePressed() {
  mySound.play();
}
