var draw = (function () {

    var dot, clear, outline, square;
    
    dot = function (ctx, options) {
        ctx.fillStyle = options.color;
        ctx.strokeStyle = options.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(options.x, options.y, options.r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };
    
    outline = function (ctx, options) {
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = options.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(options.x, options.y, options.r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };
    
    square = function (ctx, options) {
        var x = options.x - options.r/2,
            y = options.y - options.r/2;
        ctx.fillStyle = options.color;
        ctx.strokeStyle = options.color;
        ctx.beginPath();
        ctx.rect(x, y, options.r, options.r);
        ctx.fill();
        ctx.stroke();
    }
    
    clear = function (ctx, color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 600, 400);
    };

    return {
        dot: dot,
        clear: clear,
        outline: outline,
        square: square
    };
    
}());
