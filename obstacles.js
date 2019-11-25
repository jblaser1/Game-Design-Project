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


function addPlatform(x, y, w, l){
  PLATFORMS.push({xpt: x, ypt: y, xl: w, yl: l});
}

function addTempPlatform(x, y, w, l){
  TEMPPLATFORMS.push({xpt: x, ypt: y, xl: w, yl: l});
}


function removeTempPlatforms(){
  PLATFORMS = PLATFORMS.filter(function(objFromA) {
  return !TEMPPLATFORMS.find(function(objFromB) {
    return objFromA.xpt === objFromB.xpt && objFromA.ypt === objFromB.ypt && objFromA.xl === objFromB.xl && objFromA.yl === objFromB.yl
  })
})
console.log(PLATFORMS)

}
