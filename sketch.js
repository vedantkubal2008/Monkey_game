
//to store memmory for sprites.
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
//to store memmory for scoring
var survival_time = 0;

function preload(){
  //to preload animation & image
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //to create canvas
  createCanvas(500,500);

  //to create monkey
  monkey = createSprite(100,350,20,20);
  //to add animation
  monkey.addAnimation("moving",monkey_running);
  //to adjust size 
  monkey.scale = 0.1;
  
  //to create ground
  ground = createSprite(450,385,900,10);
  //to assign velocity
  ground.velocityX = -3;
  ground.x = ground.width/2;
  //to create group
  FoodGroup = createGroup();
  obstacleGroup = createGroup(); 
}

function draw() {
    //to assign background color
    background("white");
 
    //to repeat the background
    if (ground.x < 100){
        ground.x = ground.width/2;
  }
   
    //when the space key is pressed the monkey should jump
    if(keyDown("space")&& monkey.y >= 250){
       monkey.velocityY = -12;
}
  
   //add gravity to monkey
   monkey.velocityY = monkey.velocityY + 0.8;
  
   //monkey should on ground
   monkey.collide(ground);
  
   //calling obstacles and food 
   food();
   obstacles();
  
   //to draw sprites
   drawSprites(); 

  //to assign stroke color
  stroke("black");
  //assign text size
  textSize(20);
  //asign text color
  fill("black");
  survival_time=Math.ceil(frameCount/frameRate());
  //to text survival time.
  text("Survival Time:"+ survival_time,100,50);
}
//custom functions
function food(){
  
  if(frameCount % 80 === 0){
   //to create sprite 
   var banana = createSprite(400,150,20,20);
   //to assign random y position to banana 
   banana.y = Math.round(random(120,200));
   //to add image 
   banana.addImage(bananaImage);
   //to adjust size 
   banana.scale = 0.1;
   //to assign x velocity 
   banana.velocityX = -3;
   //to assign lifetime to banana sprite 
   banana.lifetime = 110;
   //to add food group
   FoodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount % 300 === 0){
  //to create sprite  
  obstacle = createSprite(400,365,20,20);
  //to add image
  obstacle.addImage(obstacleImage);
  //to adjust size
  obstacle.scale = 0.1;
  //to assign x velocity  
  obstacle.velocityX = -3;
  //to assign lifetime to obstacle sprite  
  obstacle.lifetime = 150;
  //to add obstacle group
  obstacleGroup.add(obstacle);
  }
}



