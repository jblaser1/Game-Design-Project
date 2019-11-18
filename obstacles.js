function initializeObstacle(){
  OBSTACLE.numOfObstacles = Math.trunc(Math.random() * 10) + 1;
  randomizeLocations();
}

function randomizeLocations(){
  for(var i = 0; i < OBSTACLE.numOfObstacles; i++){
    OBSTACLE.x.push(Math.trunc(Math.random() * 400) + 100);
    OBSTACLE.y.push(Math.trunc(Math.random() * 100) + 130);
    OBSTACLE.width.push(Math.trunc(Math.random() * 10) + 20);
  }
}

function HandleRectObstacleMovement(){
  for(var i = 0; i < OBSTACLE.numOfObstacles; i++)
  {
    if(controller.up && RECTANGLE.jumping)
    {
      if(RECTANGLE.y - 20 <= OBSTACLE.y[i] && RECTANGLE.x >= OBSTACLE.x[i] && RECTANGLE.x <= OBSTACLE.x[i] + OBSTACLE.width[i])
      {
        return OBSTACLE.y[i];
      }
    }
  }
  return 0;
}
