function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 100, 100);
  
  stroke(0);
  strokeWeight(2);
  fill(250,200,0);
  circle(300, 200, 300);
   fill(255,255,0);
circle(300,200,250);

  
  line(300,350, 300,50)
  line(150,200,450,200)
  
  fill(200)
  rect(250, 100, 10,20)
  rect(350, 180, 20,10)
  rect(200, 240, 20,10)
  
  fill(180,175,0)
  triangle(230,240, 230, 210, 250,220)
  triangle(310,180, 300, 200, 320, 200)
  triangle(180, 200, 200, 185, 185, 180)
  triangle(350, 250, 370, 250, 360, 270)
  
  fill(255,200,0)
  ellipse(230, 150, 15,20)
  ellipse(400, 250, 20, 30)
  ellipse(280,230, 30, 15)
  ellipse(370, 130, 25, 15)
  
  fill(0,255,0)
  circle(270, 170, 20)
  fill(255,255,0)
  circle(270, 170, 13)
  
  fill(0,255, 0)
  circle(250,300, 25)
  fill(255, 255,0)
  circle(250,300, 15)
  
  fill(255,0,0)
  circle(350, 150, 20)
  fill(255,255,0)
  circle(350,150, 13)
  
   fill(255,0,0)
  circle(330, 240, 18)
  fill(255,255,0)
  circle(330, 240, 10);
  
  fill(150,150,255)
  quad(310, 80, 310,100, 340, 100, 320, 80)
  quad(280, 315, 285, 305, 305,305, 305, 315)
  
  fill(255,100, 0)
  square(290, 250, 20)
  square(310, 140, 17)
  
  arc(120, 120, 200, 200, PI, PI+HALF_PI, PIE)
  arc(480, 120, 200, 200, PI+HALF_PI,TWO_PI, PIE)
  arc(120, 280, 200, 200, HALF_PI, PI, PIE)
  arc(480, 280, 200, 200, 0, HALF_PI, PIE)
  
 point (250, 180)
  point(320, 250)
 point(400, 180)
  point(290, 100)
  point(270, 300)
  point(200, 210)
  
  
}