var draw = (function () {

    var dot, clear, outline, square, texture, write, imageCache = {}, images, i, len;
    
    images = [
        'art/meditation.png', 
        'art/thoughts.png',
        'art/thoughts_1.png',
        'art/thoughts_2.png',
        'art/thoughts_3.png'
    ];
    
    for (i = 0, len = images.length; i < len; i++) {
        var img = new Image();
        img.src = images[i];
        imageCache[images[i]] = img;
    }
    
    write = function (ctx, options) {
        ctx.fillStyle = options.color;
        ctx.font = options.font;
        ctx.fillText(options.text, options.x, options.y);
    };
    
    texture = function (ctx, options) {
        var x = options.x - options.r,
            y = options.y - options.r;
        ctx.drawImage(imageCache[options.src], x, y, options.r * 2, options.r * 2);
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
        texture: texture,
        write: write
    };
    
}());
