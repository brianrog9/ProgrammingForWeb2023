var pos;

function setup() {
    createCanvas(500,500);
    angleMode(DEGREES);

    slider = createSlider(0, 15, 0)
    slider2 = createSlider(0, 15, 0)

    pos = 0.0
    inc = 2.0

    pos2 = 0.0
    inc2 = 3.0
}

function draw() {

    clear();

    translate(width/2, height/2);

    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal*40;
    amplified = mySinVal2*70;

    for (x = 0; x <= 360; x = x + 13) {
      
      stroke(217, 117, 17, 30);
       strokeWeight(10);
       fill(77, 82, 107, 80);
       ellipse(width/10, amplified*5, amplified, amplified*15);
       rotate(x);
    }

    pos = pos + slider.value();
    pos2 = pos2 + slider2.value();
}