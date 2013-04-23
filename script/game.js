var game = (function () {
  var start, __ = {};
  
  __.randomColor = function () {
    var red, green, blue;
    red = parseInt(Math.random()*255);
    blue = parseInt(Math.random()*255);
    green = parseInt(Math.random()*255);
    return 'rgb(' + red + ',' + blue + ',' + green + ')';
  };
  
  start = function () {
    var context = document.getElementById('canvas').getContext('2d');
    setInterval(function () {
      context.fillStyle = __.randomColor();
      context.fillRect(0,0,600,400);
    }, 200);
  };
  
  return {
    start: start
  };
}());

window.onload = function () {
  game.start();  
};
