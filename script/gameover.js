var gameover = (function () {
    
    var update, init, shouldChange, interact, reset, __ = {};
    
    __.change = false;
    
    init = function (ctx) {
        __.context = ctx;
    };
    
    update = function () {
        draw.clear(__.context,"grey");
        draw.write(__.context, {
            text: "game over",
            x: "200",
            y: "200",
            color: "black"
        });
    };
    
    shouldChange = function () {
        return __.change;
    };
    
    interact = function () {
        __.change = true;
    };
    
    reset = function () {
        __.change = false;
    };
    
    return {
        init: init,
        update: update,
        next: 'gamePlay',
        shouldChange: shouldChange,
        interact: interact,
        reset: reset
    };
}())