let points;
let font;
const waveInput = document.querySelector("input.wave");


function preload(){
  font = loadFont('assets/lunchtype24.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  points = font.textToPoints('A', windowWidth/2.5,windowHeight/2.2, 400,{
    sampleFactor: 0.04,
    simplifyThreshold: 0
  });
  
}

function draw() {
  background(0);
  translate(0, 100);
  beginShape(POINTS);
  stroke(255);
  strokeWeight(4);

  const wave = waveInput.value;

  for(let i =0; i< points.length; i++){
   vertex(points[i].x + sin(frameCount*0.05 + points[i].y*0.8)*wave, points[i].y);
  }
  endShape();
  
  
}