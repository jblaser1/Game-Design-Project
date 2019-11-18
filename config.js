var GAME = {
  started : true,
  level : 1,
  multiplayer : false
};

var RECTANGLE = {
  height:0,
  jumping:true,
  width:0,
  x:0, // center of the canvas
  x_velocity:0,
  y:0,
  y_velocity:0,
  floor:300-16-100
};

var RECTANGLETWO = {
    height:0,
    jumping:true,
    width:0,
    x:0, // center of the canvas
    x_velocity:0,
    y:0,
    y_velocity:0
};

var OBSTACLE =
{
  x : [],
  y : [],
  width : [],
  numOfObstacles : 0
};
