var ninjaCooldown = 0; //will be set to an amount equal to 7200 / #Ninja that are supposed to spawn this level. decrememented each frame.
var score = 0;


function handleNinjaAnimation() {
  //creates new Ninja in empty spaces.
  if (ninjaCooldown <= 0) {

    var a;
    var b;
    var isInANinja = true;
    var tooMuchStuff = 0;
    while (isInANinja && tooMuchStuff < 1000) {
      tooMuchStuff++;
      isInANinja = false;
      a = Math.trunc(Math.random() * 580);
      b = Math.trunc(Math.random() * 280);
      for (ninja of NINJAS) {
        if (a <ninja.x + 20 && a + 20 >ninja.x && b <ninja.y + 20 && b + 20 >ninja.y) {
          isInANinja = true;
        }
      }
      if (RECTANGLE.x - 13 < a + 20 && RECTANGLE.x + 13 >= a && RECTANGLE.y - 13 <= b + 20 && RECTANGLE.y + 13 > b) {
        isInANinja = true;
      }
    }
    NINJAS.push({
      x: a,
      y: b,
      hp: 100 + 2 * GAME.level,
      cooldown: 60

    }); //Ninja' positions measure from their TOP LEFT CORNER. DIFFERENT FROM PLAYER
  }
  GAME.levelTime--;
  ninjaCooldown = 1;

  //checks if Ninja should be dead, removes them if so



  for (var i = 0; i <NINJAS.length; i++) {
    NINJAS[i].cooldown--;
    if (NINJAS[i].hp <= 0) {
      ninjaCooldown --
      NINJAS.splice(i, 1);
      i--;
      score++;
    }


  }



  //moves all Ninja closer to the player
  for (var i = 0; i < NINJAS.length; i++) {
    //Ninja.velY += 20;
    //Ninja[i].y +=ninjavelY;
    var y = NINJAS[i].y + 10 - RECTANGLE.y;
    var x = NINJAS[i].x + 10 - RECTANGLE.x;
    NINJAS[i].y -= -10;
    NINJAS[i].x -= 2 * (x / Math.sqrt((x * x) + (y * y)));
    if (NINJAS[i].y > 500 - 16 - 170) {
      NINJAS[i].y = 545 - 16 - 170;
      //Ninja[i].y = 0;
    }
    //this next part exists to check if the Ninja just moved into the same space as another Ninja or player, and undoes the move if so.
    var attacked = false;
    if (Math.abs(NINJAS[i].x - RECTANGLE.x) < 20){
      attacked = true;
    }
    if (attacked) {
      if (NINJAS[i].cooldown <= 0) {
        RECTANGLE.health -= 20;
        NINJAS[i].cooldown = 120;
      }
    }
    for (otherNinja of NINJAS) {
      if (NINJAS[i] != otherNinja && otherNinja.x < NINJAS[i].x + 20 && otherNinja.x + 20 > NINJAS[i].x && otherNinja.y < NINJAS[i].y + 20 && otherNinja.y + 20 > NINJAS[i].y) {
        attacked = true;
      }
    }
    if (attacked) {
      NINJAS[i].y += 1 * (y / Math.sqrt((x * x) + (y * y)));
      NINJAS[i].x += 1 * (x / Math.sqrt((x * x) + (y * y)));
    }
  }
}

function RenderNinja(context) {
  //draws every Ninja
  var canvas = document.getElementById('mainCanvas');
  var ninImage = new Image();
  ninImage.src = 'assets/Ninja.png';
  for (ninja of NINJAS) {
    context.drawImage(ninImage,ninja.x,ninja.y, 100, 100);
  }
}
