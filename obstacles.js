function initializeObstacle(){
  var x = 0;
  var y = 0;
  var width = 0;
  var numOfObstacles = Math.trunc(Math.random() * 3) + 3;
  for(var i = 0; i < numOfObstacles; i++){
    xpos = (Math.trunc(Math.random() * 400) + 100);
    ypos = 200 - (Math.trunc(Math.random() * 50));
    w = (Math.trunc(Math.random() * 10) + 20);
    OBSTACLE.push({
      x: xpos,
      y: ypos,
      width: w
    });
  }
}
