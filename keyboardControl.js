var controller = {

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

var controllerTwo = {

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

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
