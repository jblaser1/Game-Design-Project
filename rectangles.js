function initializeRectangles(){
  RECTANGLE.height = 100;
  RECTANGLE.width = 100;
  RECTANGLE.x = 400;
  RECTANGLE.y = 200;
  RECTANGLETWO.height = 100;
  RECTANGLETWO.width = 100;
  RECTANGLETWO.x = 400;
  RECTANGLETWO.y = 200;
}

function HandleFirstPlayerMovement (){
  if (controller.up && RECTANGLE.jumping == false) {
    RECTANGLE.y_velocity -= 20;
    RECTANGLE.jumping = true;
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

  // if rectangle is falling below floor line
  if (RECTANGLE.y > RECTANGLE.floor) {
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
