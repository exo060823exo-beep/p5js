let earringR, earringG, earringB;
let bgR, bgG, bgB;
let isBlinking = false;
function setup() {
  createCanvas(600, 400);
  earringR = 255; earringG = 204; earringB = 0;
  bgR = 200;      bgG = 200;      bgB = 200;
}
function draw() {
  background(bgR, bgG, bgB);
  let leftDX  = constrain(mouseX - 250, -8, 8);
  let leftDY  = constrain(mouseY - 210, -8, 8);
  let rightDX = constrain(mouseX - 350, -8, 8);
  let rightDY = constrain(mouseY - 210, -8, 8);
  
  stroke(200, 150, 100);
  strokeWeight(2);
  fill(255, 224, 189);
  circle(400, 200, 40)
  circle(200, 200, 40)
  rect(276,120, 50, 300)
  ellipse(300, 200, 200, 230);
  triangle(300, 240, 310, 245, 290, 245)
  fill(139, 69, 19);
  circle(300, 70, 80);
  arc(300, 170, 200, 170, PI, TWO_PI);
  
  push();
  fill(255, 224, 189);
  noStroke();
  triangle(300, 160, 285, 180, 315, 180);
  triangle(260, 160, 245, 180, 275, 180);
  triangle(340, 160, 325, 180, 355, 180);
  pop();
  
  fill(170, 240, 209);
  noStroke();
  rect(150, 350, 300, 100)
  line(220, 180, 280, 180)
  line(320, 180, 380, 180)
  fill(255)
  ellipse(250, 210, 50, 40)
  ellipse(350, 210, 50,40)
  fill(0)
  circle(250,210,20)
  circle(350,210,20)
  
  fill(255, 182, 193);
  arc(300,265,80,40, 0, PI)
  
  push();
  noFill();          
  stroke(255, 0, 0);   
  strokeWeight(3);
  ellipse(250, 210, 60, 50);
  ellipse(350, 210, 60, 50);
  line(280, 210, 320, 210)
  line(220, 210, 200, 200);
  line(380, 210, 400, 200);
  pop();
  
  push();
  stroke(0);
  strokeWeight(2);
  line(200, 220, 200, 250);
  line(400, 220, 400, 250);
  fill(255, 204, 0);
  noStroke();
  rect(190, 250, 10, 20); 
  rect(390, 250, 10, 20); 
  pop();
  
  push();
  stroke(0, 200, 170);
  strokeWeight(4);
  line(150, 370, 450, 370);
  line(150, 390, 450, 390);
  line(150, 410, 450, 410);
  line(150, 430, 450, 430);
  noStroke();
  pop();
}
