var gamePlay = (function() {

    var update, 
        init, 
        context, 
        __ = {};

    __.backgroundCount = 0;
    __.entities = []

    init = function (ctx) {
        var i, max;
        context = ctx;
        for (i = 0, max = 10; i < max; i++) {
            __.entities.push(junk.spawn());
        }
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
        var i, entitiesCount;
        context.fillStyle = __.generateBackgroundColor(delta);
        context.fillRect(0, 0, 600, 400);
        for (i = 0, entitiesCount = __.entities.length; i < entitiesCount; i++) {
            __.entities[i].update(delta,context);
        }
    };

    return {
        update: update,
        init: init
    };
}());
