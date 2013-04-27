var game = (function () {
    var start;

    start = function () {
        var now = 0,
            then = Date.now(),
            interval = 30,
            delta = 1,
            canvas = document.getElementById('canvas'),
            mouseIsDown = false,
            mousePos = { x: 0, y: 0 };

        gamePlay.init(canvas.getContext('2d'));
        
        canvas.onmousedown = function (event) {
            mouseIsDown = true;
        };
        
        canvas.onmouseup = function (event) {
            mouseIsDown = false;
        };
        
        canvas.onmousemove = function (event) {
            mousePos.x = event.pageX - canvas.offsetLeft,
            mousePos.y = event.pageY - canvas.offsetTop
        };
        
        setInterval(function () {
            now = Date.now ();
            delta = (now - then) / interval;
            gamePlay.update (delta);
            if (mouseIsDown) {
                gamePlay.interact(mousePos);
            }
            then = now;
        }, interval);
    };

    return {
        start: start
    };
}());

window.onload = function () {
    game.start ();
};
