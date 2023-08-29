let texts = [];
let slider;
let img;


function preload() {
 img = loadImage('../img/building 450x600.jpeg');
 img.size(450,530);
}


function setup() {
  
    var myCanvas = createCanvas(450,530);
    myCanvas.parent("p5jscanvas");
  topLayer = createGraphics(width, height);
  
  
  topLayer.image(img, 0, 0, 450, 530);
  
  //topLayer.strokeWeight(30);
  
        
  topLayer.blendMode(REMOVE);
  
  // 브러시 두께 조정을 위한 슬라이더 설정하기
  //brushSizeSlider = createButton('굵기 조정하기');
  //sizeSlider = createSlider(1, 32, 4, 0.1);
  
  setupTexts();

}

function setupTexts() {
  textSize(40);
  textStyle(BOLD);
  for (let i = 0; i < 10; i++) {
    texts.push(new MovingText(random(width), random(height)));
  }
}

function draw() {
  background(203,196,189);
  drawTexts();

  
  if(mouseIsPressed){
    //크기조절 관련 코드
    //let sw = sizeSlider.value();
        //strokeWeight(sw);
    //let sw = sizeSlider.value();
   //topLayer.strokeWeight(35);
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    
      topLayer.noStroke();
  topLayer.ellipse(mouseX, mouseY, random(60));
  topLayer.rectMode(CENTER);
    
  }
  
  image(topLayer, 0, 0);

  
}

function drawTexts() {
  for (let text of texts) {
    text.move();
    text.display();
  }
}

class MovingText {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-7, 4);
    this.ySpeed = random(-7, 20);
    this.message = "<div>";
    fill(90);
  }
  
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    text(this.message, this.x, this.y);
    text(this.message, this.x - 100, this.y - 30);
    text(this.message, this.x + 60, this.y + 500);
    text(this.message, this.x + 60, this.y + 210);
    text(this.message, this.x + 300, this.y + 170);
    text(this.message, this.x + 130, this.y + 70);
    text(this.message, this.x + 30, this.y + 240);
    text(this.message, this.x + 600, this.y + 21);
    text(this.message, this.x +  600, this.y + 16);
    text(this.message, this.x +  270, this.y + 28);
    text(this.message, this.x +  1000, this.y + 10);
    text(this.message, this.x +  800, this.y + 60);
  }
  
}
