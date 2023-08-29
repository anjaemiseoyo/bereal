//initialize x and y position in matrix
let textYpos = 200;
let textXpos = 0;
//initailize movement speed
let dropSpeed = 2;
//spacing in between lines of numbers
let xSpacing = 15;
let ySpacing = 10;
//An array of random numbers for Y positions
let yInitialPos = [];
//An array of random numbers for the length of number line
let numberLength = [];
//X position for each text
let textXposInLine = 0;
//Y position for each text
let textYposInLine = 0;
//Timer
let timeCounter = 0;
//Gaps between each line
let lineGaps = [];

let topLayer;
let slider;
let img;

function preload() {
  img = loadImage('../img/shadow 600x450.jpeg');
  img.size(600,450);
}

function setup() {
    var myCanvas = createCanvas(600,450);
    myCanvas.parent("p5jscanvas");

  randomizer();

  topLayer = createGraphics(width, height); 
  topLayer.image(img, 0, 0, 600, 450);    
  topLayer.blendMode(REMOVE);
  
  
  
}

function draw() {
  
  background(139,139,234);
  frameRate(30);
  //run the timer
  timeCounter ++;
  //call main function
  movingNumberMatrix();
  
  
  
  if(mouseIsPressed){
    topLayer.strokeWeight(30);
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    
  }
  
  image(topLayer, 0, 0);
}

//매트릭스 효과 
function randomizer() {
  //Randomize three arrays 
  for (let a = 0; a < 100;  a++) {
  //Generate a array of ramdom numbers to be the length of number lines
  numberLength[a] = int(random(8, 20));
  //Generate a array of ramdom numbers to be the initial Y postions of the matrix 
  yInitialPos[a] = int(random(-10, 50));
  //Generate a array of ramdom numbers to be gaps length between each falling lines on Y axis
  lineGaps[a] = int(random(2, 4));
 }
}

function generateNumberMatrix() {
  textSize(15);
  fill(color(49,49,86));
  //For loop on x axis
  for (let xRepCounter = 0; xRepCounter < 80;  xRepCounter++) {
    //For loop on Y axis
    for(let yRepCounter = 0; yRepCounter < numberLength[xRepCounter]; yRepCounter ++) {
      // X positons 
      textXposInLine = textXpos + xRepCounter * xSpacing;
      // For loop for each falling number line
      //NOTE: change number 30 to higher or a inifinte number ('Timecounter') will cuase your computer overheated!!!!!!!!
      for (let lineRepCounter = 0; lineRepCounter < 30; lineRepCounter ++) {
        // Y positons 
        textYposInLine = textYpos + yInitialPos[xRepCounter] + yRepCounter * ySpacing - lineRepCounter * numberLength[xRepCounter] * (ySpacing + lineGaps[xRepCounter]);
        //Write numbers
        text(int(random(0, 10)), textXposInLine, textYposInLine);
      }
    }
  }
}


function movingNumberMatrix() {
  //Make the matrix move
  textYpos += dropSpeed;
  generateNumberMatrix();
}
