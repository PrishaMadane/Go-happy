var backImage,player_running,bananaImage,obstacle_img;
var jungle,monkey,obstacleGroup,foodGroup;

function preload () {
backImage = loadImage("jungle.jpg");
player_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 

bananaImage = loadImage("banana.png");
obstacle_img= loadImage("stone.png");  
}

function setup() {
  createCanvas(400, 400);
  
  score=Math.ceil(frameCount/frameRate());
  
  ground=createSprite(130,360,400,10);
  ground.visible=false;
  
  jungle= createSprite(400,120,800,10);
  jungle.addAnimation("moving",backImage);
  jungle.velocityX= -9;
  jungle.x = jungle.width/2;

  monkey= createSprite(100,330,20,50);
  monkey.addAnimation("player",player_running);
  monkey.scale= 0.1;
  
  
  foodGroup = new Group();
  obstacleGroup = new Group();

}

function draw() {
  background(220);
  
   if (keyDown("space")&& monkey.y >= 324){
    monkey.velocityY= -10;
  }
  
    if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
    if (foodGroup.isTouching(monkey)){
  foodGroup.destroyEach();
  obstacleGroup.destroyEach();
  }
    if (obstacleGroup.isTouching(monkey)){
   monkey.scale = 0.2;
   }
 
     
  monkey.velocityY = monkey.velocityY + 0.9;
  
  
  
  switch(score){
    case 10 : monkey.scale =0.12;
              break;
    case 20 : monkey.scale =0.14;
              break; 
    case 30 : monkey.scale =0.16;
              break; 
    case 40 : monkey.scale =0.18;
              break;    
              default:break;         
  }

   stroke("white");
   textSize(20);
   fill("white");
   text("Score:"+ score , 500,50);
  
   food();
   obstacle();
  
  monkey.collide(ground);
  
  drawSprites();
}
function food () {
if (World.frameCount % 80 === 0){
    var banana = createSprite(400,320,20,20);
   
    banana.addImage(bananaImage);
    banana.scale= 0.05;
    banana.y = random(150,180);
    
    banana.velocityX = -7;
    banana.setlifetime=100;
    
    foodGroup.add(banana);
   }
   
}
  
  function obstacle () {
  if (World.frameCount % 300 === 0){
    var stone = createSprite(400,330,20,20);
   
    stone.addImage(obstacle_img);
    stone.scale= 0.15;
   
    stone.velocityX = -7;
    stone.setlifetime=100;
    
    obstacleGroup.add(stone);

  }
  }

  
