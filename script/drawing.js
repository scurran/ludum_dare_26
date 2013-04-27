var draw = (function () {

    var dot, clear;
    
    dot = function (ctx, options) {
        ctx.fillStyle = options.color;
        ctx.strokeStyle = options.color;
        ctx.beginPath();
        ctx.arc(options.x, options.y, options.r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };
    
    clear = function (ctx, color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 600, 400);
    };

    return {
        dot: dot,
        clear: clear
    };
    
}());
