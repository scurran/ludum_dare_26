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
            state = startscreen,
            interactionStart = function (event) {
                mouseIsDown = true;
            },
            interactionEnd = function (event) {
                mouseIsDown = false;
            },
            interactionMove = function (event) {
                if (event.touches) {
                    event = event.touches[0];
                }
                mousePos.x = event.pageX - canvas.offsetLeft,
                mousePos.y = event.pageY - canvas.offsetTop
            };

        gamePlay.init(canvas.getContext('2d'));
        gameover.init(canvas.getContext('2d'));
        startscreen.init(canvas.getContext('2d'));
        
        states = {
            gamePlay: gamePlay,
            gameover: gameover,
            startscreen: startscreen
        };
        
        canvas.onmousedown = interactionStart;
        canvas.onmouseup = interactionEnd;
        canvas.onmousemove = interactionMove;
        
        window.addEventListener("touchmove", function (event) {
            event.preventDefault();
        }, false);
        
        canvas.addEventListener("touchstart", interactionStart, false);
        canvas.addEventListener("touchend", interactionEnd, false);
        canvas.addEventListener("touchmove", interactionMove, false);
        
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
    if (canvas.getContext('2d').mozImageSmoothingEnabled) {
        canvas.getContext('2d').mozImageSmoothingEnabled = false;
    }
    
    game.start ();
};
