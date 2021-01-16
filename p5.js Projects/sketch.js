let x;
let y;
let speedX = 3;
let speedY = 5; 

function setup() {
  createCanvas(500, 500);
  background(240);
  x = random(0, width);
  y = random(0, height);
  speedX = random(-3, 3);
  speedY = random(-3, 3);

}

function draw() {
  const redVal = map(x, 0, width, 0, 255);
  const greenVal = map(y, 0, height, 0, 255);
  // if (mouseIsPressed){
  //   fill(0);
  // }else{
  //   fill(255);
  // }
  // ellipse(mouseX,mouseY,80,80);

  translate(x, y);
  const rotation = map(y, 0, height, 0, TWO_PI);
  rotate(rotation);
  stroke(redVal, greenVal, 255);
  line(-200, 0, 200, 0);

  x = x + speedX;
  y = y + speedY;

  if (x > width || x < 0 ){
    speedX = -speedX;
  }
  if(y > height || y < 0){
    speedY -= speedY;
  }
}
