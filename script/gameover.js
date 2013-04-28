var gameover = (function () {
    
    var update, init, shouldChange, interact, reset, __ = {};
    
    __.change = false;
    __.delay = 60;
    
    init = function (ctx) {
        __.context = ctx;
    };
    
    update = function () {
        var i, max;
        draw.clear(__.context,"black");
        draw.write(__.context, {
            text: "game over",
            x: "10",
            y: "380",
            color: "white",
            font: "bold 24px lobster"
        });
        __.delay -= 1;
    };
    
    shouldChange = function () {
        return __.change;
    };
    
    interact = function () {
        if (__.delay < 0) {
            __.change = true;            
        }
    };
    
    reset = function () {
        __.delay = 60;
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