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
    
    update = function (delta) {
        var i, entitiesCount, newEntities = [], ent;
        draw.clear(context, 'black');
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
