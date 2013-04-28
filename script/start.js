var startscreen = (function () {
    
    var update, init, shouldChange, interact, reset, __ = {};
    
    __.change = false;
    __.delay = 5;
    
    __.x = 100;
    
    init = function (ctx) {
        __.context = ctx;
    };
    
    update = function (delta) {
        var i, max;
        draw.clear(__.context,"white");

        draw.write(__.context, {
            text: "Click to start...",
            x: "10",
            y: "380",
            color: "black",
            font: "bold 24px lobster"
        });
        
        draw.write(__.context, {
            text: "Draw with the mouse.",
            x: "10",
            y: "50",
            color: "black",
            font: "bold 24px lobster"
        });
        
        draw.write(__.context, {
            text: "Deflect",
            x: "10",
            y: "110",
            color: "black",
            font: "bold 24px lobster"
        });
        
        draw.square(__.context, {
            r: 3,
            x: 100 + __.x,
            y: 100 + 10*Math.sin(__.x / 10),
            color: 'black'
        });
        
        draw.write(__.context, {
            text: "Collect",
            x: "250",
            y: "110",
            color: "black",
            font: "bold 24px lobster"
        });
        
        draw.square(__.context, {
            r: 3,
            x: 350 + __.x,
            y: 100 + 10*Math.sin(__.x / 10),
            color: '#FF9900'
        });
        
        __.x += delta;
        
        if (__.x > 100) {
            __.x = 0;
        }
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
        __.delay = 5;
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