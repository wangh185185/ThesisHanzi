//Notes: The Image will NOT load unless the web folder is being actively hosted such as github page and localhost:8000!!!!
//Notes: The Preload() function will NOT work (showing text of loading...)unless the web folder is being actively hosted also.
//Hosting Localserver, go to Mac search Terminal and "cd" locate folder and then "python -m SimpleHTTPServer 8000" with Enter, "http://localhost:8000/".

let strokeSizing = 25; 
let BGcolor = 'tan';
let button;
let imgZi;
// imgZi = loadImage('assets/zi12x12in.png');

function preload() {
    imgZi = loadImage('assets/zi12x12in.png');
}

function setup() {

  //this positions the canvas on the standard location rather than on the default bottom.
  let canvas = createCanvas(900, 900);
  canvas.parent('p5-1');


  textFont('Montserrat');
  FPS = 60;
  frameRate(FPS);
  background(BGcolor);
  
    //Wipe to Clean button below
  button = createButton('Click to Retry');
  button.position(0, height);
  button.mousePressed(changeBG);
  button.size(150,50);
  button.style("font-size", "18px");

  // imgZi = loadImage('assets/zi12x12in.png');
}

function draw() {
  imageMode(CENTER);
  image(imgZi, 1/2 * width, 1/2 * height, width, height);
}

function mouseDragged() {
    noStroke();
    fill('blue');
    ellipse(mouseX, mouseY, strokeSizing);
}

function changeBG() {
  clear(mouseDragged);
  background(BGcolor);
}