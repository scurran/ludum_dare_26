var draw = (function () {

    var dot, clear, outline, square, texture;
    
    texture = function (ctx, options) {
        var x = options.x - options.r,
            y = options.y - options.r,
            img = new Image();
        img.src = options.src;
        ctx.drawImage(img, x, y, options.r * 2, options.r * 2);
    };
    
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
        var x = options.x - options.r,
            y = options.y - options.r;
        ctx.fillStyle = options.color;
        ctx.strokeStyle = options.color;
        ctx.beginPath();
        ctx.rect(x, y, options.r * 2, options.r * 2);
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
        square: square,
        texture: texture
    };
    
}());
