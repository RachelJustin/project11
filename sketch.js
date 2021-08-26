
var ground, invisibleGround, groundImage;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runningImage =  loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(800,800);
  //create sprites here




  path = createSprite(200,180);
  path.addImage("path",pathImage);
  path.velocityY = 7;
    
  runner = createSprite(230, 400);
  runner.addAnimation("running", runningImage);
  runner.velocityX = 2;
  runner.velocityY = -3;
  runner.scale = 0.1;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  runner.collide(invisibleGround);
  
}



function draw() {
  background(0);

  edges= createEdgeSprites();
  runner.collide(edges);
  
  console.log(path.y);
  if (path.y > 400) {
    path.y = height/3;
  }

 drawSprites() ;
runner.bounceOff(edges);
}

function mousePressed() {
  runner.velocityX = 2;
  runner.velocityY = -3;

  runner.x = World.mouseX;
  runner.y = World.mouseY;
}
