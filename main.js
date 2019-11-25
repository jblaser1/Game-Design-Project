var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var Ninja = new Image();
Ninja.src = '/assets/Samurai.png';
var standingNinja = new Image();
standingNinja.src = '/assets/Samurai.png';
var background = new Image()
background.src = '/assets/GameBackground.png'

var xx = 250;
var yy = 182;

function RenderPlatforms(context) { //draws every platform in PLATFORMS onnto the screen
  var platform = new Image();
  platform.src = "/assets/Wood.png"
  for (const plat of PLATFORMS)
    context.drawImage(platform,plat.xpt, plat.ypt, plat.xl, plat.yl); //you can replace this with .drawImage once you have pictures for the platforms
}

function drawHealthBar(){
  context.beginPath();
  context.fillStyle="#FF0000";
  context.rect(69, 59, 144, 25/2 + 2);
  context.stroke();
  context.fillRect(70,60,(RECTANGLE.health/100)*141,25/2);
  //context.fillRect(1000 - 30 - 70, 20, RECTANGLETWO.health/100 * 70, 25/2);
  //context.rect(1000 - 30 - 71, 19, 72, 25/2 + 2);
  context.stroke();
  context.fillStyle = "white";
  context.font = "8pt sans-serif";
  context.fillText("Player 1: " + RECTANGLE.health, 73, 60 + 25/3 + 1);
  //context.fillText("Player 2: " + RECTANGLETWO.health, 1000-30-67, 20 + 25/3 + 1);


}
function drawObstacles(){
  for(var i = 0; i < OBSTACLE.length; i++){
    context.beginPath();
    context.rect(OBSTACLE[i].x, OBSTACLE[i].y, OBSTACLE[i].width, 3);
    context.fillStyle = "black";
    context.fill();
  }
}

function loop(){
/////PLAYER
  if(GAME.started && RECTANGLE.health > 0)
  {

    HandleFirstPlayerMovement();
    //HandleSecondPlayerMovement();
    handleNinjaAnimation();
    context.clearRect(0, 0, 1000, 500);
    //context.fillStyle = "#ffff";

    context.drawImage(background,0,0);
    context.drawImage(standingNinja, RECTANGLE.x, RECTANGLE.y, 80, 160);
    //context.drawImage(Ninja, RECTANGLETWO.x, RECTANGLETWO.y, 80, 160);
    //drawObstacles();
    //RenderPlatforms(context);
    drawHealthBar();
    context.font = "20px Arial";
    context.fillText("Score: " + score, 800, 75);
    context.fillText("WASD - N to attack", 500, 75);
    RenderNinja(context);
  }
  else{
    context.font = "30px Arial";
    context.fillText("Game Over      You Lose", 300, 200);

  }


  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
