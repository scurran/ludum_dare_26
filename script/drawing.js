var draw = (function () {

    var dot;
    
    dot = function (ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2*Math.PI);
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
