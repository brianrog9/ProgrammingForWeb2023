function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {

    if (mouseIsPressed){
        fill(255, 204, 100);
        noStroke();
    }
    else{
        fill(255, 204, 1000);
        noStroke();
    }
    ellipse(mouseX, mouseY, 50, 50);
 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}