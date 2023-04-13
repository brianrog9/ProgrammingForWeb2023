let points = [];


function setup() {
  createCanvas(1000, 1000);
  points = generateSnowflake(6, height/2);
}

function draw() {  
  background(50);
  fill(255);
  noStroke();
  drawPoints(points, width/2, height/2);
  
}

function drawPoints(points, x, y) {  
  beginShape();
  for(let i = 0; i < points.length; i ++) {
    const point = points[i];
    vertex(x + point.x, y + point.y);
  }
  endShape(CLOSE);
}

function generateSnowflake(numSegments, radius) {
  const segmentPoints = pointsForSegment(numSegments, radius);
  return snowflakeFromSegment(numSegments, segmentPoints);
}

// Returns a list of points
// that define the shape of one "segment" of a snowflake
function pointsForSegment(numSegments, radius) {
  const numPointsInSeg = int(random(3, 8));
  const segmentPoints = [];
  
  const segmentAngle = PI/numSegments;
  
  // Generate random points in half of the segment
  for(let i = 0; i < numPointsInSeg; i ++) {
    const a = random(segmentAngle);
    const r = random(radius);
    segmentPoints.push(createVector(a, r));
  }
  
  // Reflect the points by flipping the angle
  for(let i = numPointsInSeg - 1; i >= 0; i --) {
    const point = segmentPoints[i];
    segmentPoints.push(createVector(-point.x, point.y));
  }
  
  return segmentPoints;
}

// Takes the points that make up one segment
// and returns a list of points that make up an
// entire snowflake
function snowflakeFromSegment(numSegments, segmentPoints) {
  const points = [];
  for(let i = 0; i < numSegments; i ++) {
    const ang = i * TWO_PI/numSegments;
    
    for(let j = 0; j < segmentPoints.length; j ++) {
      const point = segmentPoints[j];   
      const x = cos(point.x + ang) * point.y;
      const y = sin(point.x + ang) * point.y;
      
      points.push(createVector(x, y));
    }
  }
  
  return points;
}

function mouseReleased() {
  points = generateSnowflake(6, height/2);
}