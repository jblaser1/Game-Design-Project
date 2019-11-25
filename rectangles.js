function initializeRectangles(){
  RECTANGLE.height = 250;
  RECTANGLE.width = 125;
  RECTANGLE.x = 400;
  RECTANGLE.y = 200;
  RECTANGLETWO.height = 250;
  RECTANGLETWO.width = 125;
  RECTANGLETWO.x = 400;
  RECTANGLETWO.y = 200;
  RECTANGLE.health = 100;
  RECTANGLETWO.health = 100;
}

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
  if (controller.up && RECTANGLE.jumping == false) {
    RECTANGLE.velY -= 25;
    RECTANGLE.jumping = true;
  }
  if (controller.left) {
    RECTANGLE.velX -= 0.5;
  }
  if (controller.right) {
    RECTANGLE.velX += 0.5;
  }

  RECTANGLE.velY += 1.0;// gravity
  RECTANGLE.x += RECTANGLE.velX;
  RECTANGLE.y += RECTANGLE.velY;
  RECTANGLE.velX *= 0.9;// friction
  RECTANGLE.velY *= 0.9;// friction

  if (RECTANGLE.y > 500 - 16 - 170) {
    RECTANGLE.jumping = false;
    RECTANGLE.y = 500 - 16 - 170
    RECTANGLE.velY = 0;
  }

  // if rectangle is going off the left of the screen
  if (RECTANGLE.x < 120) {
    RECTANGLE.x = 120;
  } else if (RECTANGLE.x > 820) {// if rectangle goes past right boundary
    RECTANGLE.x = 820;
  }
}

function isOnAPlatform() {
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.RECTANGLE.x +CAT.RECTANGLE.size > plat.xpt && CAT.RECTANGLE.x < plat.xpt + plat.xl && CAT.RECTANGLE.y + CAT.RECTANGLE.size >= plat.ypt && CAT.RECTANGLE.y + CAT.RECTANGLE.size <= plat.ypt + 10) {
      b = plat.ypt;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderAPlatform() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.RECTANGLE.x +CAT.RECTANGLE.size > plat.xpt && CAT.RECTANGLE.x < plat.xpt + plat.xl && CAT.RECTANGLE.y >= plat.ypt +plat.yl -10 && CAT.RECTANGLE.y <= plat.ypt +plat.yl) {
      b = plat.ypt + plat.yl;
    }
  }
  return b;
}

function isRightOfAPlatform() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.RECTANGLE.x > plat.xpt +plat.xl -10 && CAT.RECTANGLE.x <= plat.xpt + plat.xl && CAT.RECTANGLE.y + CAT.RECTANGLE.size > plat.ypt && CAT.RECTANGLE.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}

function isLeftOfAPlatform() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.RECTANGLE.x +CAT.RECTANGLE.size >= plat.xpt && CAT.RECTANGLE.x +CAT.RECTANGLE.size <= plat.xpt +10  && CAT.RECTANGLE.y +CAT.RECTANGLE.size> plat.ypt && CAT.RECTANGLE.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}

function attack() {
  console.log(true);
    for (var i = 0; i <NINJAS.length; i++){
      if (NINJAS[i].x - RECTANGLE.x < 70 && NINJAS[i].x - RECTANGLE.x > 0){
        ninja.hp -= 55;
        console.log(ninja.hp);
       }

  }

}













/**

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
    if (RECTANGLETWO.y > 500 - 16 - 170) {
      RECTANGLETWO.jumping = false;
      RECTANGLETWO.y = 500 - 16 - 170
      RECTANGLETWO.y_velocity = 0;
    }

    // if rectangleTwo is going off the left of the screen
    if (RECTANGLETWO.x < 120) {
      RECTANGLETWO.x = 120;
    } else if (RECTANGLETWO.x > 820) {// if rectangleTwo goes past right boundary
      RECTANGLETWO.x = 820;
    }
  }
  else{
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
    if (RECTANGLETWO.y > 500 - 16 - 170) {
      RECTANGLETWO.jumping = false;
      RECTANGLETWO.y = 500 - 16 - 170
      RECTANGLETWO.y_velocity = 0;
    }
    // if rectangleTwo is going off the left of the screen
    if (RECTANGLETWO.x < -100) {
      RECTANGLETWO.x = 1000;
    } else if (RECTANGLETWO.x > 1000) {// if rectangleTwo goes past right boundary
      RECTANGLETWO.x = -32;
    }
  }
}
*/
