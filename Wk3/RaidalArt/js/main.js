
// Color arrays
let circleone = ["#ffe11c","#ffffff", '#33f56d'];
let circletwo = ["#f53333", '#eb33f5', '#9b33f5'];
let circlethree = ["#33e8f5", '#f57a33', '#77f533'];

//random color selection
let coloroneindex = Math.floor(Math.random() * circleone.length);
let coloroneset = circleone[coloroneindex];
let colortwoindex = Math.floor(Math.random() * circletwo.length);
let colortwoset = circletwo[colortwoindex];
let colorthreeindex = Math.floor(Math.random() * circlethree.length);
let colorthreeset = circlethree[colorthreeindex];

let rotateBy = 5;

//button locations
let loopcheck = true;
let rectW = 100;
let rectH = 100;
let x = 608;
let y = 408;
let sz = 100;
// let x1 = 608;
// let y1 = 508;
// let sz1 = 100;
let x2 = 608;
let y2 = 308;
let sz2 = 100;



function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
    resetButton = createButton('Change')
    resetButton.size(100, 100);
    resetButton.position(608, 308);
    // changeButton = createButton('Change');
    // changeButton.size(100,100);
    // changeButton.position(608, 508);
    stopButton = createButton('Pause');
    stopButton.size(100,100);
    stopButton.position(608, 408);
    
}


//Elipse one
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(coloroneset);
    strokeWeight(1);
    ellipse(150, 150, + alt, 150 - alt);
}


//Elipse two
function makeArmTwo(rotateBy) {
    let alt = Math.round(rotateBy / 60);
    noFill();
    stroke(colortwoset);
    strokeWeight(1);
    ellipse(100, 100, + alt, 100 / alt);
}


//Elipse three
function makeArmThree(rotateBy) {
    let alt = Math.round(rotateBy / 370);
    noFill();
    stroke(colorthreeset);
    strokeWeight(1);
    ellipse(175, 175, + alt, 175 + alt);
}


function draw() {
    translate (300, 300);
    rotate (rotateBy);
    makeArm(rotateBy);
    makeArmTwo(rotateBy);
    makeArmThree(rotateBy);
    rotateBy += 5;
}


//Reset and Pause Functions
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
    // if (mouseX > x1 && mouseY > y1 && mouseX < x1 + sz1 && mouseY < y1 + sz1){
    //     console.log('pressed');
        
    // }
    if (mouseX > x2 && mouseY > y2 && mouseX < x2 + sz2 && mouseY < y2 + sz2){
        console.log('pressed');
        restart();
    }

}

function restart(){
    window.location.reload();
}






