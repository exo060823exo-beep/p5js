function setup() {
  createCanvas(600, 400);
}

function draw() {
  let t = frameCount * 0.02;

  let c1 = color(0, 100, 100);
  let c2 = color(0, 60, 160);
  let bg = lerpColor(c1, c2, (sin(t * 0.5) + 1) / 2);
  background(bg);

  stroke(0);
  strokeWeight(2);

  let outerSize = 300 + sin(t) * 12;
  let innerSize = 250 + sin(t + 1) * 10;
  fill(250, 200, 0);
  circle(300, 200, outerSize);
  fill(255, 255, 0);
  circle(300, 200, innerSize);

  stroke(0);
  strokeWeight(2);
  line(300, 350, 300, 50);
  line(150, 200, 450, 200);

  fill(200);
  rect(250, 100, 10, 20);
  rect(350, 180, 20, 10);
  rect(200, 240, 20, 10);

  fill(180, 175, 0);
  triangle(230, 240, 230, 210, 250, 220);
  triangle(310, 180, 300, 200, 320, 200);
  triangle(180, 200, 200, 185, 185, 180);
  triangle(350, 250, 370, 250, 360, 270);

  fill(255, 200, 0);
  ellipse(230, 150, 15, 20);
  ellipse(400, 250, 20, 30);
  ellipse(280, 230, 30, 15);
  ellipse(370, 130, 25, 15);

  let greenSize1 = 20 + sin(t * 1.5) * 5;
  let greenSize2 = 25 + sin(t * 1.2 + 1) * 6;
  fill(0, 255, 0);
  circle(270, 170, greenSize1);
  fill(255, 255, 0);
  circle(270, 170, greenSize1 * 0.65);

  fill(0, 255, 0);
  circle(250, 300, greenSize2);
  fill(255, 255, 0);
  circle(250, 300, greenSize2 * 0.6);

  let rx1 = 350 + cos(t * 0.8) * 10;
  let ry1 = 150 + sin(t * 0.8) * 8;
  fill(255, 0, 0);
  circle(rx1, ry1, 20);
  fill(255, 255, 0);
  circle(rx1, ry1, 13);

  let rx2 = 330 + sin(t * 1.1) * 9;
  let ry2 = 240 + cos(t * 1.1) * 7;
  fill(255, 0, 0);
  circle(rx2, ry2, 18);
  fill(255, 255, 0);
  circle(rx2, ry2, 10);

  fill(150, 150, 255);
  quad(310, 80, 310, 100, 340, 100, 320, 80);
  quad(280, 315, 285, 305, 305, 305, 305, 315);

  fill(255, 100, 0);
  square(290, 250, 20);
  square(310, 140, 17);

  let arcR0 = map(sin(t),-1, 1, 0, 255);
  let arcG0 = map(cos(t),-1, 1, 0, 255);
  let arcB0 = map(sin(t + 1),-1, 1, 100, 255);

  let arcR1 = map(sin(t + HALF_PI),-1, 1, 0, 255);
  let arcG1 = map(cos(t + HALF_PI),-1, 1, 0, 255);
  let arcB1 = map(sin(t + HALF_PI + 1),-1, 1, 100, 255);

  let arcR2 = map(sin(t + PI), -1, 1, 0, 255);
  let arcG2 = map(cos(t + PI), -1, 1, 0, 255);
  let arcB2 = map(sin(t + PI + 1), -1, 1, 100, 255);

  let arcR3 = map(sin(t + PI + HALF_PI), -1, 1, 0, 255);
  let arcG3 = map(cos(t + PI + HALF_PI),-1, 1, 0, 255);
  let arcB3 = map(sin(t + PI + HALF_PI + 1), -1, 1, 100, 255);

  fill(arcR0, arcG0, arcB0);
  arc(120, 120, 200, 200, PI, PI + HALF_PI, PIE);

  fill(arcR1, arcG1, arcB1);
  arc(480, 120, 200, 200, PI + HALF_PI, TWO_PI, PIE);

  fill(arcR2, arcG2, arcB2);
  arc(120, 280, 200, 200, HALF_PI, PI, PIE);

  fill(arcR3, arcG3, arcB3);
  arc(480, 280, 200, 200, 0, HALF_PI, PIE);

  point(250, 180);
  point(320, 250);
  point(400, 180);
  point(290, 100);
  point(270, 300);
  point(200, 210);

}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 8);
  }
}