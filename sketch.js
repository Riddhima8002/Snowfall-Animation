var snow, snowimg,star,starimg,boy , boyimg


function preload() {
boyimg = loadImage("boyimg.png");
snowimg=loadImage("snow2.jpg");
  
}
function setup() {
  createCanvas(800,400);
  boy=createSprite(250, 350, 50, 50);
  boy.addImage(boyimg);
  boy.scale=0.4
}

function draw() {
  background(snowimg);  
  drawSprites();
  if(keyDown("RIGHT_ARROW")){
    boy.x=-2
  }
  if(keyDown("LEFT_ARROW")){
    boy.x=+2
  }
}