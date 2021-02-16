function setup() {
  createCanvas(800,400);


}

function draw() {
  
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  rotate(-90);
  background(0,0,0);  
  sc = second();
  min = minute();
  hr = hour();
  console.log(sc,min,hr);

  push();
  scAngle = map(sc,0,60,0,360);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100, 0);
  pop();

  push();
  minAngle = map(min,0,60,0,360);
  rotate(minAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100, 0);
  pop();
  
  push();
  hrAngle = map(hr%12,0,12,0,360);
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100, 0);
  pop();
}