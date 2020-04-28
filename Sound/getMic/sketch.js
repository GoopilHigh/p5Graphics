var mic;

function setup() {
  createCanvas(500, 500);

  //get Mic input
  mic = new p5.AudioIn();
  mic.start();
}

//loop
function draw() {
  background(51);

  //Volume
  let vol = mic.getLevel();

  var diam = map(vol, 0, 0.3, 10, 200);

  fill(vol * 10, random(250), random(250));
  ellipse(width / 2, height / 2, diam, diam);
}
