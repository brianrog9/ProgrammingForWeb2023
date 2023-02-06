let rotateBy = 5;
let circleone = ("#ffe11c");
let cirlcetwo = ("#f53333");
let circlethree= ("#33e8f5");
let loopcheck = true;
let rectW = 100;
let rectH = 100;
let x = 608;
let y = 408;
let sz = 100;

function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
    changeButton = createButton('Change');
    changeButton.size(100,100);
    changeButton.position(608, 508);
    stopButton = createButton('Pause');
    stopButton.size(100,100);
    stopButton.position(608, 408);
    
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(circleone);
    strokeWeight(1);
    ellipse(150, 150, + alt, 150 - alt);
}

function makeArmTwo(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(cirlcetwo);
    strokeWeight(1);
    ellipse(100, 100, + alt, 100 - alt);
}

function makeArmThree(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(circlethree);
    strokeWeight(1);
    ellipse(175, 175 + alt, 175 - alt);
}

function draw() {
    translate (300, 300);
    rotate (rotateBy);
    makeArm(rotateBy);
    makeArmTwo(rotateBy);
    makeArmThree(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    if (mouseX > x && mouseY > y && mouseX < x + sz && mouseY < y + sz){
        loopcheck = !loopcheck;
        console.log('the loop is ' + loopcheck);
    }

    if (loopcheck){
        loop();
    }
    else if (!loopcheck){
        noLoop();
    }

}




