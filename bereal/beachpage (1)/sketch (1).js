let texts = [];
let slider;
let img;

function preload() {
 img = loadImage('../img/beach450x600.jpeg');
 img.size(450, 530);
}


function setup() {
  

    var myCanvas = createCanvas(450, 530);
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
  textSize(15);
  for (let i = 0; i < 10; i++) {
    texts.push(new MovingText(random(width), random(height)));
  }
}

function draw() {
  background(175,147,111);
  drawTexts();

  
  if(mouseIsPressed){
    //크기조절 관련 코드
    //let sw = sizeSlider.value();
        //strokeWeight(sw);
    //let sw = sizeSlider.value();
   topLayer.strokeWeight(20);
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    
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
    this.ySpeed = random(-7, 1);
    this.message = "해변가에 담긴 두 발에는 물이차오르고 있다. 사람의 손으로 보인다/옆에는 물 양동이가 놓여있다. 물의 가장자리 경계선 구분으로 짐작할때";
    fill(255);
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
    text(this.message, this.x - 70, this.y - 30);
    text(this.message, this.x + 10, this.y + 500);
    text(this.message, this.x + 60, this.y + 210);
    text(this.message, this.x + 100, this.y + 170);
    text(this.message, this.x + 130, this.y + 70);
    text(this.message, this.x + 30, this.y + 30);
    text(this.message, this.x + 600, this.y + 21);
    text(this.message, this.x +  430, this.y + 16);
    text(this.message, this.x +  270, this.y + 28);
    text(this.message, this.x +  1000, this.y + 10);
    text(this.message, this.x +  800, this.y + 60);
  }
  
}
