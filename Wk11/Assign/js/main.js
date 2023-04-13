function setup() {
    createCanvas(1920, 1080);
}

function draw() {
    background(50);
}

function pointsForSegment(numSegments, radius) {
    const numPointsInSeg = int(random(4, 10));
    const segmentPoints = [];

    const segementAngle = PI/numSegments;

    for(let i = 0; i < numPointsInSeg; i ++) {
        const a = random(segmentAngle);
        const r = random(radius);
        segmentPoints.push(createVector(a, r));
      }
}