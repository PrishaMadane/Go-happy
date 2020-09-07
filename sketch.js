var backImage,player_running,bananaImage,obstacle_img;
var jungle , monkey ;

var  foodGroup = createGroup();
var obstacleGroup = createGroup();

function preload () {
backImage = loadImage("jungle.jpg");
player_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 

bananaImage = loadImage("banana.png");
obstacle_img= loadImage("stone.png");  
}

function setup() {
  createCanvas(400, 400);
  
  jungle= createSprite(400,360,800,10);
  jungle.addAnimation("moving",backImage);
  jungle.velocityX= -9;
  jungle.x = jungle.width/2;

  monkey= createSprite(100,330,20,50);
  monkey.addAnimation("player",player_running);
  monkey.scale= 0.1;
}

function draw() {
  background(220);
  
  if (keyDown("space")&& monkey.y >= 324){
    monkey.velocityY= -10;
  } 
      
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
    
  player.velocityY = player.velocityY + 0.9;
  
  if (foodGroup.isTouching(monkey)){
  foodGroup.destroyEach();
  obstacleGroup.destroyEach();
  }
  
  switch(score){
    case 10 : player.scale =0.12;
              break;
    case 20 : player.scale =0.14;
              break; 
    case 30 : player.scale =0.16;
              break; 
    case 40 : player.scale =0.18;
              break;    
              default:break;         
  }
   if (obstacleGroup.isTouching(monkey)){
   monkey.scale = 0.2;
   }
   stroke("white");
   textSize(20);
   fill("white");
   score=Math.ceil(frameCount/frameRate()); 
   text("Score:"+ score , 500,50);
  
   food();
   obstacle();
  
  monkey.collide(ground);
  
  drawSprites();
}
function food () {
if (World.frameCount % 80 === 0){
    var banana = createSprite(400,320,20,20);
   
    banana.setAnimation("Banana");
    banana.scale= 0.05;
    banana.y = randomNumber(120,200);
    
    banana.velocityX = -7;
    banana.setlifetime=100;
    
    foodGroup.add(banana);
   }
   
}
  
  function obstacle () {
  if (World.frameCount % 300 === 0){
    var stone = createSprite(400,330,20,20);
   
    stone.setAnimation("Stone");
    stone.scale= 0.15;
   
    stone.velocityX = -7;
    stone.setlifetime=100;
    
    obstacleGroup.add(stone);

     }  
  }