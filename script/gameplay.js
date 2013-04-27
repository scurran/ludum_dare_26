var gamePlay = (function() {

    var update, 
        init, 
        context, __ = {};

    __.backgroundCount = 0;

    init = function (ctx) {
        context = ctx;
    };

    __.generateBackgroundColor = function (delta) {
        var red, green, blue, val;
        __.backgroundCount += delta;
        val = (Math.sin(__.backgroundCount/50) + 1)*50 + 50;
        red = 0;
        blue = parseInt(val);
        green = parseInt(val);
        return 'rgb(' + red + ',' + blue + ',' + green + ')';
    };

    update = function (delta) {
        context.fillStyle = __.generateBackgroundColor(delta);
        context.fillRect(0, 0, 600, 400);
    };

    return {
        update: update,
        init: init
    };
}());
