/*********************************************
  1. mouse:
    - 마우스 이동시 눈동자가 마우스 방향을 따라 움직임
    - 마우스 버튼 클릭시 귀걸이 색상이 변경됨
	2. keyboard:
	 - 키보드의 W 키를 누르면 눈을 깜빡임 (눈꺼풀이 내려왔다 올라감)
    - 키보드의 R 키를 누르면 머리카락 색상이 변경됨
    - 키보드의 스페이스바를 누르면 배경색이 변경됨
***********************************************/	
let earringR, earringG, earringB;
let hairR, hairG, hairB;
let bgR, bgG, bgB;
let blinkCount = 0;

function setup() {
  createCanvas(600, 400);
    saveGif('캐리커쳐 움직임 20252112김서영', 10)
  earringR = 255; earringG = 204; earringB = 0;
  hairR = 139;    hairG = 69;     hairB = 19;
  bgR = 200;      bgG = 200;      bgB = 200;
}

function draw() {
  background(bgR, bgG, bgB);

 
  let leftDX  = constrain(mouseX - 250, -8, 8);
  let leftDY  = constrain(mouseY - 210, -8, 8);
  let rightDX = constrain(mouseX - 350, -8, 8);
  let rightDY = constrain(mouseY - 210, -8, 8);


  stroke(0);
  strokeWeight(1);
  fill(255, 224, 189);
  circle(400, 200, 40);
  circle(200, 200, 40);
  rect(276, 120, 50, 300);
  ellipse(300, 200, 200, 230);
  triangle(300, 240, 310, 245, 290, 245);


  fill(hairR, hairG, hairB);
  circle(300, 70, 80);
  arc(300, 170, 200, 170, PI, TWO_PI);


  push();
  noStroke();
  fill(255, 224, 189);
  triangle(300, 160, 285, 180, 315, 180);
  triangle(260, 160, 245, 180, 275, 180);
  triangle(340, 160, 325, 180, 355, 180);
  pop();


  stroke(0);
  strokeWeight(1);
  fill(170, 240, 209);
  rect(150, 350, 300, 100);

 
  fill(255);
  ellipse(250, 210, 50, 40);
  ellipse(350, 210, 50, 40);


  fill(0);
  noStroke();
  circle(250 + leftDX,  210 + leftDY,  20);
  circle(350 + rightDX, 210 + rightDY, 20);


if (blinkCount > 0) {
  fill(255, 224, 189);
  noStroke();
  ellipse(250, 210, 54, 44);
  ellipse(350, 210, 54, 44);
  blinkCount--;
  }


  noStroke();
  fill(255, 182, 193);
  arc(300, 265, 80, 40, 0, PI);


  push();
  noFill();
  stroke(255, 0, 0);
  strokeWeight(3);
  ellipse(250, 210, 60, 50);
  ellipse(350, 210, 60, 50);
  line(280, 210, 320, 210);
  line(220, 210, 200, 200);
  line(380, 210, 400, 200);
  pop();


  push();
  stroke(0);
  strokeWeight(2);
  line(200, 220, 200, 250);
  line(400, 220, 400, 250);
  noStroke();
  fill(earringR, earringG, earringB);
  rect(190, 250, 10, 20);
  rect(390, 250, 10, 20);
  pop();

 
  push();
  stroke(0, 200, 170);
  strokeWeight(4);
  for (let y = 370; y <= 430; y += 20) {
    line(150, y, 450, y);
  }
  pop();
}

function mousePressed() {
  earringR = random(255);
  earringG = random(255);
  earringB = random(255);
}

function keyPressed() {
if (key === 'w' || key === 'W') {
  blinkCount = 20;
  }
  if (key === 'r' || key === 'R') {
    hairR = random(255);
    hairG = random(255);
    hairB = random(255);
  }
  if (key === ' ') {
    bgR = random(255);
    bgG = random(255);
    bgB = random(255);
  }

}