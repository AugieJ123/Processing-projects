let x = 200;
let y = 200;
let extraCanvas;

function setup(){
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  extraCanvas.clear();
  background(0);
}

function draw(){
  background(0);
  // No trails!
  x += random(-5, 5);
  y += random(-5, 5);

  // trails
  extraCanvas.fill(255, 150);
  extraCanvas.noStroke();
  let starX = random(width);
  let starY = random(height);
  extraCanvas.ellipse(starX, starY, 10, 10);

  image(extraCanvas, 0, 0);
  fill(255, 30, 150);
  stroke(255)
  rectMode(CENTER);
  rect(x, y, 20, 20);
}