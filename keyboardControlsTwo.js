var CONTROLS = {
  RECTANGLE: {
    attack: false
  }};

  document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "n":
      //console.log(true);
      standingNinja.src = '/assets/samuraiSwing.png';
      CONTROLS.RECTANGLE.attack = true;
      if (CONTROLS.RECTANGLE.attack = true)
      {
        attack();
        console.log(true);
      }
      break;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "n":
      standingNinja.src = '/assets/Samurai.png';
      CONTROLS.RECTANGLE.attack = false;
      break;


  }
});
