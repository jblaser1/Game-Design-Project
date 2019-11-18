var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var standingNinja = new Image();
standingNinja.src = '/assets/Samurai.png';
var ninja = new Image();
ninja.src = '/assets/Samurai.png';

var background = new Image()
background.src = '/assets/GameBackground.png'

var xx = 250;
var yy = 182;

function drawObstacles(){
  for(var i = 0; i < OBSTACLE.numOfObstacles; i++){
    context.beginPath();
    context.moveTo(OBSTACLE.x[i], OBSTACLE.y[i]);
    context.lineTo(OBSTACLE.x[i] + OBSTACLE.width[i], OBSTACLE.y[i]);
    context.stroke();
  }
}
function loop(){
/////PLAYER
  if(GAME.started)
  {
    HandleRectObstacleMovement();
    HandleFirstPlayerMovement();
    HandleSecondPlayerMovement();

    context.clearRect(0, 0, 600, 300);
    //context.fillStyle = "#ffff";
    /*
    context.fillRect(0, 0, 600, 300);// x, y, width, height
    context.fillStyle = "#ffff";// hex for red
    context.beginPath();
    context.rect(RECTANGLE.x, RECTANGLE.y, RECTANGLE.width, RECTANGLE.height);
    context.fill();
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 284);
    context.lineTo(600, 284);
    context.stroke();
    */
    context.drawImage(background,0,0);
    context.drawImage(standingNinja, RECTANGLE.x, RECTANGLE.y, 50, 100);
    context.drawImage(ninja, RECTANGLETWO.x, RECTANGLETWO.y, 50, 100);
    drawObstacles();
  }
  else{
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
///THE NINJA STILL IS CONTROLLED BY WASD, BUT IT IS BEING CREATED. INSTEAD, AN "AI" SHOULD FOLLOW PLAYER


  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
