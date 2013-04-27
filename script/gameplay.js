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
        for (i = 0, max = 20; i < max; i++) {
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
        var i, entitiesCount, newEntities = [], ent;
        context.fillStyle = __.generateBackgroundColor(delta);
        context.fillRect(0, 0, 600, 400);
        for (i = 0, entitiesCount = __.entities.length; i < entitiesCount; i++) {
            ent = __.entities[i];
            ent.update(delta,context);
            if (ent.alive()) {
                newEntities.push(ent);
            }
        }
        __.entities = newEntities;
    };
    
    interact = function (mousePos) {
        __.entities.push(bubble.spawn(mousePos));
    };

    return {
        update: update,
        interact: interact,
        init: init
    };
    
}());
