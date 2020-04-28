var ball;

function setup() {
  createCanvas(500, 500);
  ball = new Ball(width / 2, height / 2, width / 3);
}

function draw() {
  background(51);
  ball.show();
}

function Ball(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.ctr = random(1000);

  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(200);
    beginShape();
    for (var a = 0; a < TWO_PI; a += PI / 200) {
      var cos_a = cos(a),
        sin_a = sin(a),
        // noise is symmetric about origin (move to 1,1)
        noi = noise(cos_a + 1, sin_a + 1, this.ctr),
        d = this.r + map(noi, 0, 1, -25, 25);
      vertex(d * cos_a, d * sin_a);
      // For see they points :
      // ellipse(d * cos_a, d * sin_a, 4, 4);
    }
    endShape();
    pop();
    this.ctr += 0.01;
  }
}
