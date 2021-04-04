var edge1 
var edge2
var edge3
var edge4 
var goal 
var goal2 
var computerStricker
var playerStricker
var ball 
var edge5 
var edge6 
var gamestate="serve";
var playerScore;
var ComputerScore;
var ballImg;
var playerImg;
var computerImg;
    function preload(){
        playerImg=loadImage("leftrun-removebg-preview.png");
        computerImg=loadImage("robot.png");
    }
    function setup(){
        edge1 = createSprite(10,200,5,400);
        edge1.shapeColor="white";
        edge2 = createSprite(390,200,5,400);
        edge2.shapeColor="white";
        edge3 = createSprite(200,10,400,5);
        edge3.shapeColor="white";
        edge4 = createSprite(200,390,400,5);
        edge4.shapeColor="white";
        goal = createSprite(200,28,100,20);
        goal.shapeColor="yellow";
        goal2 = createSprite(200,372,100,20);
        goal2.shapeColor="yellow";
        computerStricker = createSprite(200,350,50,10);
        computerStricker.addImage(computerImg);
        playerStricker = createSprite(200,50,50,10);
        playerStricker.addImage(playerImg);
        playerStricker.scale=0.3
        ball = createSprite(200,200,10,10);
        edge5 = createSprite(200,150,400,5);
        edge5.shapeColor="white";
        edge6 = createSprite(200,250,400,5);
        edge6.shapeColor="white";

    playerScore = 0;
    ComputerScore = 0;


    }
    
  

function draw() {
  background("green");
  
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  if(gamestate==="serve"){
    fill("white");
    textSize(20);
    text("Press Space To Serve",130,180);
  }
  fill("white");
  text(ComputerScore,20,170);
   fill("white");
  text(playerScore,20,230);

  
  ball.bounceOff(edge1);
  ball.bounceOff(edge2);
  ball.bounceOff(edge3);
  ball.bounceOff(edge4);
  ball.bounceOff(computerStricker);
  ball.bounceOff(playerStricker);
  
  
  
  
  computerStricker.x=ball.x;
 if(keyDown("left")){
   playerStricker.x=playerStricker.x-10;
 }
  if(keyDown("RIGHT")){
   playerStricker.x=playerStricker.x+10;
 }
  if(keyDown("UP")){ 
    if(playerStricker.y>25){
    }
   playerStricker.y=playerStricker.y-10;
 }
  if(keyDown("down")){
    if(playerStricker.y<120){
    }
   playerStricker.y=playerStricker.y+3;
 }
  
  
  
    if (keyDown("space") &&  gamestate === "serve") {
    serve();
    gamestate = "play";
   }
 
  
  if (keyDown("r") && gamestate === "over") {
    gamestate = "serve";
    compScore = 0;
    playerScore = 0;
  }
  if (playerScore === 5 || ComputerScore === 5){
    gamestate = "over";
    textSize("20");
    text("Game Over!",170,140);
    textSize("20");
    text("Press 'R' to Restart",150,180);
  }
   if(ball.isTouching(goal)) {
      playerScore = playerScore + 1;
    reset();
    gamestate = "serve";
  }
   
  
   
   
  if(ball.isTouching(goal2)) {
      compScore = compScore + 1;  
    }
    
    playerStricker.collide(edge1);
    playerStricker.collide(edge2);
    playerStricker.collide(edge3);
    playerStricker.collide(edge4);
    playerStricker.collide(edge5);
    playerStricker.collide(edge6);
    playerStricker.collide(goal);
    playerStricker.collide(goal2);
    
    
  drawSprites();
}
function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}
function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}


