var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 300;
context.canvas.width = 600;

var standingNinja = new Image();
standingNinja.src = '/assets/Samurai.png';
var ninja = new Image();
ninja.src = '/assets/Samurai.png';

var background = new Image()
background.src = '/assets/GameBackground.png'


var xx = 250;
var yy = 182;


rectangle = {

  height:100,
  jumping:true,
  width:100,
  x:400, // center of the canvas
  x_velocity:0,
  y:200,
  y_velocity:0

};

controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.key) {

      case "a":// left key
        controller.left = key_state;
      break;
      case "w":// up key
        controller.up = key_state;
      break;
      case "d":// right key
        controller.right = key_state;
      break;

    }

  }

};
/////////////
//Enemy Ninja movements
//////////////
rectangleTwo = {
    height:100,
    jumping:true,
    width:100,
    x:400, // center of the canvas
    x_velocity:0,
    y:200,
    y_velocity:0

  };

  controllerTwo = {

    left:false,
    right:false,
    up:false,
    keyListener:function(event) {

      var key_state = (event.type == "keydown")?true:false;

      switch(event.key) {

        case "ArrowLeft":// left key
          controller.left = key_state;
        break;
        case "ArrowUp":// up key
          controller.up = key_state;
        break;
        case "ArrowRight":// right key
          controller.right = key_state;
        break;

      }

    }

  };




loop = function() {
/////PLAYER
  if (controller.up && rectangle.jumping == false) {
    rectangle.y_velocity -= 20;
    rectangle.jumping = true;
  }
  if (controller.left) {
    rectangle.x_velocity -= 0.5;
  }
  if (controller.right) {
    rectangle.x_velocity += 0.5;
  }

  rectangle.y_velocity += 1.0
  ;// gravity
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// friction
  rectangle.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 300 - 16 - 100) {
    rectangle.jumping = false;
    rectangle.y = 300 - 16 - 100
    rectangle.y_velocity = 0;
  }
  // if rectangle is going off the left of the screen
  if (rectangle.x < 60) {
    rectangle.x = 60;
  } else if (rectangle.x > 490) {// if rectangle goes past right boundary
    rectangle.x = 490;
  }

  ////////////////
  //Enemy
  //////////

  if (controller.up && rectangleTwo.jumping == false) {
    rectangleTwo.y_velocity -= 20;
    rectangleTwo.jumping = true;
  }
  if (controller.left) {
    rectangleTwo.x_velocity -= 0.5;
  }
  if (controller.right) {
    rectangleTwo.x_velocity += 0.5;
  }

  rectangleTwo.y_velocity += 1.0
  ;// gravity
  rectangleTwo.x += rectangleTwo.x_velocity;
  rectangleTwo.y += rectangleTwo.y_velocity;
  rectangleTwo.x_velocity *= 0.9;// friction
  rectangleTwo.y_velocity *= 0.9;// friction

  // if rectangleTwo is falling below floor line
  if (rectangleTwo.y > 300 - 16 - 100) {
    rectangleTwo.jumping = false;
    rectangleTwo.y = 300 - 16 - 100
    rectangleTwo.y_velocity = 0;
  }
  // if rectangleTwo is going off the left of the screen
  if (rectangleTwo.x < -32) {
    rectangleTwo.x = 600;
  } else if (rectangleTwo.x > 600) {// if rectangleTwo goes past right boundary
    rectangleTwo.x = -32;
  }

  //context.fillStyle = "#ffff";
  context.fillRect(0, 0, 600, 300);// x, y, width, height
  context.fillStyle = "#ffff";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 284);
  context.lineTo(600, 284);
  context.stroke();
  context.drawImage(background,0,0);
  context.drawImage(standingNinja, rectangle.x, rectangle.y, 50, 100);
  context.drawImage(ninja, rectangleTwo.x, rectangleTwo.y, 50, 100);

///THE NINJA STILL IS CONTROLLED BY WASD, BUT IT IS BEING CREATED. INSTEAD, AN "AI" SHOULD FOLLOW PLAYER


  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
