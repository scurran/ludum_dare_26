var game = (function () {
    var start;

    start = function () {
        var now = 0,
            then = Date.now(),
            interval = 30,
            delta = 1,
            canvas = document.getElementById('canvas'),
            mouseIsDown = false,
            mousePos = { x: 0, y: 0 },
            state = gamePlay,
            interactionStart = function (event) {
                console.log(event);
                mouseIsDown = true;
            },
            interactionEnd = function (event) {
                console.log(event);
                mouseIsDown = false;
            },
            interactionMove = function (event) {
                console.log(event);
                mousePos.x = event.pageX - canvas.offsetLeft,
                mousePos.y = event.pageY - canvas.offsetTop
            };

        gamePlay.init(canvas.getContext('2d'));
        gameover.init(canvas.getContext('2d'));
        
        states = {
            gamePlay: gamePlay,
            gameover: gameover
        };
        
        canvas.onmousedown = interactionStart;
        canvas.onmouseup = interactionEnd;
        canvas.onmousemove = interactionMove;
        
        canvas.touchstart = interactionStart;
        canvas.touchend = interactionEnd;
        canvas.touchmove = interactionMove;
        
        setInterval(function () {
            if (state.shouldChange()) {
                state = states[state.next];
                state.reset();
            }
            now = Date.now ();
            delta = (now - then) / interval;
            state.update(delta);
            if (mouseIsDown) {
                state.interact(mousePos);
            }
            then = now;
        }, interval);
    };

    return {
        start: start
    };
}());

window.onload = function () {
    if (canvas.getContext('2d').webkitImageSmoothingEnabled) {
        canvas.getContext('2d').webkitImageSmoothingEnabled = false;
    }
    
    game.start ();
};
