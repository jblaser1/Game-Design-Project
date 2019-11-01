var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 300;
context.canvas.width = 600;

var standingNinja = new Image();
standingNinja.src = 'StandingNinja.png';

var xx = 250;
var yy = 182;

rectangle = {

  height:32,
  jumping:true,
  width:32,
  x:284, // center of the canvas
  x_velocity:0,
  y:0,
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

loop = function() {

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

  rectangle.y_velocity += 1.5;// gravity
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// friction
  rectangle.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 300 - 16 - 32) {

    rectangle.jumping = false;
    rectangle.y = 300 - 16 - 32;
    rectangle.y_velocity = 0;

  }

  // if rectangle is going off the left of the screen
  if (rectangle.x < -32) {

    rectangle.x = 600;

  } else if (rectangle.x > 600) {// if rectangle goes past right boundary

    rectangle.x = -32;

  }

  context.fillStyle = "#ffff";
  context.fillRect(0, 0, 600, 300);// x, y, width, height
  context.fillStyle = "#ff0000";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 284);
  context.lineTo(600, 284);
  context.stroke();
  context.drawImage(standingNinja, xx, yy, 100, 100);

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
