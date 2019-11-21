function initializeObstacle(){
  var x = 0;
  var y = 0;
  var width = 0;
  var numOfObstacles = Math.trunc(Math.random() * 3) + 3;
  for(var i = 0; i < numOfObstacles; i++){
    xpos = (Math.trunc(Math.random() * 700) + 100);
    ypos = 400 - (Math.trunc(Math.random() * 200));
    w = (Math.trunc(Math.random() * 20) + 20);
    OBSTACLE.push({
      x: xpos,
      y: ypos,
      width: w
    });
  }
}
