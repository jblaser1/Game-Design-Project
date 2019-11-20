var GAME = {
  started : true,
  level : 1,
  multiplayer : false
};

var RECTANGLE = {
  height:0,
  jumping:false,
  width:0,
  x:0, // center of the canvas
  velX:0,
  y:0,
  velY:0,
  speed: 3,
  grounded : true,
  health : 0
};

var RECTANGLETWO = {
    height:0,
    jumping:true,
    width:0,
    x:0, // center of the canvas
    x_velocity:0,
    y:0,
    y_velocity:0,
    health : 0
};

var OBSTACLE = [];
