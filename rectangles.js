var gravity = 3;
var friction = 0.9;
var ground = 300 - 27;
function initializeRectangles(){
  RECTANGLE.height = 100;
  RECTANGLE.width = 100;
  RECTANGLE.x = 400;
  RECTANGLE.y = 300 - 100 - 27;
  RECTANGLETWO.height = 100;
  RECTANGLETWO.width = 100;
  RECTANGLETWO.x = 400;
  RECTANGLETWO.y = 200;
  RECTANGLE.health = 100;
  RECTANGLETWO.health = 100;
}
var standingNinja = new Image();
standingNinja.src = '/assets/Samurai.png';
/*
function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2));
    var vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2));
        // add the half widths and half heights of the objects
    var hWidths = (shapeA.width / 2) + (shapeB.width / 2);
    var hHeights = (shapeA.height / 2) + (shapeB.height / 2);
    var colDir = null;
      // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      var oX = hWidths - Math.abs(vX);
      var oY = hHeights - Math.abs(vY);
      if(oX > oY)
      {
        if (vY > 0) {
            colDir = "t";
            shapeA.y += oY;
        } else {
            colDir = "b";
            shapeA.y -= oY;
        }
      } else {
          if (vX > 0) {
              colDir = "l";
              shapeA.x += oX;
          } else {
              colDir = "r";
              shapeA.x -= oX;
          }
      }
    }
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    return colDir;
}
function HandleFirstPlayerMovement (){
  if (controller.up && RECTANGLE.jumping == false && RECTANGLE.grounded) {
    RECTANGLE.y_velocity -= 20;
    RECTANGLE.jumping = true;
    RECTANGLE.grounded = false;
  }
  if (controller.left) {
    RECTANGLE.x_velocity -= 0.5;
  }
  if (controller.right) {
    RECTANGLE.x_velocity += 0.5;
  }

  RECTANGLE.y_velocity += 1.0;// gravity
  RECTANGLE.x += RECTANGLE.x_velocity;
  RECTANGLE.y += RECTANGLE.y_velocity;
  RECTANGLE.x_velocity *= 0.9;// friction
  RECTANGLE.y_velocity *= 0.9;// friction

  if(RECTANGLE.grounded){
     RECTANGLE.y_velocity = 0;
  }
  RECTANGLE.x += RECTANGLE.x_velocity;
  RECTANGLE.y += RECTANGLE.y_velocity;

  // if rectangle is falling below floor line

  if ((RECTANGLE.y >= RECTANGLE.floor)) {
    RECTANGLE.jumping = false;
    RECTANGLE.y = RECTANGLE.floor;
    RECTANGLE.y_velocity = 0;
  }

  // if rectangle is going off the left of the screen
  if (RECTANGLE.x < 60) {
    RECTANGLE.x = 60;
  } else if (RECTANGLE.x > 490) {// if rectangle goes past right boundary
    RECTANGLE.x = 490;
  }
}*/

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

function HandleFirstPlayerMovement(){
  if(controller.up){
    if (!RECTANGLE.jumping && RECTANGLE.grounded) {
            RECTANGLE.jumping = true;
            RECTANGLE.grounded = false;
            RECTANGLE.velY = -RECTANGLE.speed * 2;
        }
  }
  if(controller.right){
    if (RECTANGLE.velX < RECTANGLE.speed){
          RECTANGLE.velX++;
        }
  }
  if (controller.left){
    if(RECTANGLE.velX > -RECTANGLE.speed){
          RECTANGLE.velX--;
    }
  }
  RECTANGLE.velX *= friction;
  RECTANGLE.velY += gravity;
  RECTANGLETWO.x += RECTANGLETWO.x_velocity;
  RECTANGLETWO.y += RECTANGLETWO.y_velocity;

  for(var i = 0; i < OBSTACLE.length; i++){
    var dir = colCheck(RECTANGLE, OBSTACLE[i]);
    var obY = OBSTACLE[i].y;
  }
  if(dir == null)
  {
    if(RECTANGLE.jumping){
      RECTANGLE.grounded = true;
      RECTANGLE.jumping = false;
    }
    else if(RECTANGLE.x == 0 || RECTANGLE.x + RECTANGLE.width == 600){
      RECTANGLE.velX = 0;
      RECTANGLE.jumping = false;
    }
    if(RECTANGLE.grounded)
    {
      RECTANGLE.velY = 0;
      RECTANGLE.y = 600 - 27;
    }
  }
  else{
    if(dir === "l" || dir === "r"){
      RECTANGLE.velX = 0;
      RECTANGLE.jumping = false;
    }
    else if(dir === "b"){
      RECTANGLE.grounded = true;
      RECTANGLE.jumping = false;
    }
    else if(dir === "t"){
      RECTANGLE.velY *= -1;
    }

    if(RECTANGLE.grounded)
    {
      RECTANGLE.velY = 0;
      RECTANGLE.y = obY;
    }
  }
}

function HandleSecondPlayerMovement (){
  if(!RECTANGLETWO.multiplayer)
  {
    if(controller.up && RECTANGLETWO.jumping == false){
      RECTANGLETWO.y_velocity -= 20;
      RECTANGLETWO.jumping = true;
    }
    if(controller.left){
      RECTANGLETWO.x_velocity -= 0.7;
    }
    if(controller.right){
      RECTANGLETWO.x_velocity += 0.7;
    }
    RECTANGLETWO.y_velocity += 1.0
    ;// gravity
    RECTANGLETWO.x += RECTANGLETWO.x_velocity;
    RECTANGLETWO.y += RECTANGLETWO.y_velocity;
    RECTANGLETWO.x_velocity *= 0.9;// friction
    RECTANGLETWO.y_velocity *= 0.9;// friction

    // if rectangleTwo is falling below floor line
    if (RECTANGLETWO.y > 300 - 16 - 100) {
      RECTANGLETWO.jumping = false;
      RECTANGLETWO.y = 300 - 16 - 100
      RECTANGLETWO.y_velocity = 0;
    }
    // if rectangleTwo is going off the left of the screen
    if (RECTANGLETWO.x < -32) {
      RECTANGLETWO.x = 600;
    } else if (RECTANGLETWO.x > 600) {// if rectangleTwo goes past right boundary
      RECTANGLETWO.x = -32;
    }
    return;
  }
  if (controllerTwo.up && RECTANGLETWO.jumping == false) {
    RECTANGLETWO.y_velocity -= 20;
    RECTANGLETWO.jumping = true;
  }
  if (controllerTwo.left) {
    RECTANGLETWO.x_velocity -= 0.6;
  }
  if (controllerTwo.right) {
    RECTANGLETWO.x_velocity += 0.6;
  }

  RECTANGLETWO.y_velocity += 1.0
  ;// gravity
  RECTANGLETWO.x += RECTANGLETWO.x_velocity;
  RECTANGLETWO.y += RECTANGLETWO.y_velocity;
  RECTANGLETWO.x_velocity *= 0.9;// friction
  RECTANGLETWO.y_velocity *= 0.9;// friction

  // if rectangleTwo is falling below floor line
  if (RECTANGLETWO.y > 300 - 16 - 100) {
    RECTANGLETWO.jumping = false;
    RECTANGLETWO.y = 300 - 16 - 100
    RECTANGLETWO.y_velocity = 0;
  }
  // if rectangleTwo is going off the left of the screen
  if (RECTANGLETWO.x < -32) {
    RECTANGLETWO.x = 600;
  } else if (RECTANGLETWO.x > 600) {// if rectangleTwo goes past right boundary
    RECTANGLETWO.x = -32;
  }
}
