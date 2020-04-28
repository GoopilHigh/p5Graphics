var wave;
var slider;
var btn;
var playing;

function setup() {
  createCanvas(500, 500);

  btn = createButton('Play / Pause');
  btn.mousePressed(toggle);

  //freqSlider
  slider = createSlider(100, 1200);

  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
  wave.amp(0);
  wave.freq(0);
}

function toggle() {
  if (!playing) {
    wave.amp(0.5, 1);
    playing = true;
  } else {
    wave.amp(0, 1);
    playing = false;
  }
}


//loop
function draw() {
  if (playing) {
    background(148, 179, 134);

    //freqSetup
    wave.freq(slider.value());

    //showFreq
    text(slider.value(), 10, 30);
  } else {
    background(51);
  }
}
