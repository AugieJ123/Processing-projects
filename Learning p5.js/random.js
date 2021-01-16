var col = {
    r : 120,
    g : 50,
    b : 40
  };
  var spot = {
    x : 100,
    y : 50
  };
  
  function setup() {
    createCanvas(600, 400);
    background(0);
  }
  
  function draw() {
    col.r = random(120, 255)
    col.g = random(50,200)
    col.b = random(40, 200)
    spot.x = random(0, width)
    spot.y = random(0, height)
    noStroke()
    //ellipse
    fill(col.r, col.g, col.b);
    ellipse(spot.x, spot.y, 24, 24);
  }