
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  
  if(keyDown("space")&&monkey.y>314){
    monkey.velocityY=-15;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  console.log(monkey.y);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ",+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100,50);
  
  drawSprites();

  
}

function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 450;
    banana.scale=0.1;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    FoodGroup.add(banana);
    
  
}
}

function obstacles(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,326,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 450;
    obstacle.velocityX = -4;
    obstacle.scale=0.1;
    obstacle.depth = monkey.depth;
    obstacle.depth = monkey.depth + 1;
    obstacleGroup.add(obstacle);
  }
  
}





