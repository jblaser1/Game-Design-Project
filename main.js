var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var ninja = new Image();
ninja.src = '/assets/Samurai.png';

var background = new Image()
background.src = '/assets/GameBackground.png'

var xx = 250;
var yy = 182;

function drawHealthBar(){
  context.beginPath();
  context.fillStyle="#FF0000";
  context.rect(29, 19, 72, 25/2 + 2);
  context.stroke();
  context.fillRect(30,20,(RECTANGLE.health/100)*70,25/2);
  context.fillRect(600 - 30 - 70, 20, RECTANGLETWO.health/100 * 70, 25/2);
  context.rect(600 - 30 - 71, 19, 72, 25/2 + 2);
  context.stroke();
  context.fillStyle = "white";
  context.font = "8pt sans-serif";
  context.fillText("Player 1: " + RECTANGLE.health, 33, 20 + 25/3 + 1);
  context.fillText("Player 2: " + RECTANGLETWO.health, 600-30-67, 20 + 25/3 + 1);
}
function drawObstacles(){
  for(var i = 0; i < OBSTACLE.length; i++){
    context.beginPath();
    context.fillRect(OBSTACLE[i].x, OBSTACLE[i].y, OBSTACLE[i].width, OBSTACLE[i].height);
  }

}

function loop(){
/////PLAYER
  if(GAME.started)
  {
    context.clearRect(0, 0, 600, 300);
    drawObstacles();
    HandleFirstPlayerMovement();
    HandleSecondPlayerMovement();
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
    context.drawImage(ninja, RECTANGLE.x, RECTANGLE.y, 50, 100);
    context.drawImage(ninja, RECTANGLETWO.x, RECTANGLETWO.y, 50, 100);
    drawHealthBar();
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
