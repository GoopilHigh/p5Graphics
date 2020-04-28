
var song;
var sliderRate;
var sliderPan;
var button;
var buttonJump;
var amp;

function setup() {
  createCanvas(200, 200);
  button = createButton("Load"); 
  button.mousePressed(togglePlaying);

  buttonJump = createButton("jump");
  buttonJump.mousePressed(jumpSong);

  song = loadSound('Run.mp3', loaded);
  song.setVolume(0.5);
  amp = new p5.Amplitude();

  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function jumpSong() {
  var len = song.duration();
  song.jump(random(len));
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause")
  } else {
    song.pause();
    button.html("play")
  }
    
}

function loaded() {
  button = createButton("play"); 
  button.mousePressed(togglePlaying);
}

function draw() {
  background(51);
  console.log(song.currentTime());
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());

  //amp
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);

  var len = song.duration();
  fill(song.currentTime() * 10, random(len) + song.currentTime(), random(len) + song.currentTime());
  ellipse(width / 2, height / 2, diam, diam);

}
