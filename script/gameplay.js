var gamePlay = (function() {

    var update, 
        init,
        interact,
        context, 
        __ = {};

    __.entities = [];
    __.bubbles = [];
    __.maxEntities = 10;

    init = function (ctx) {
        context = ctx;
    };
    
    __.updateEntities = function (ents, delta, context) {
        var i, entitiesCount, newEntities = [], ent;
        for (i = 0, entitiesCount = ents.length; i < entitiesCount; i++) {
            ent = ents[i];
            ent.update(delta,context);
            if (ent.alive()) {
                newEntities.push(ent);
            }
        }
        return newEntities;
    };
    
    update = function (delta) {
        draw.clear(context, 'black');
        if ((__.entities.length < __.maxEntities) && (Math.random() > 0.9)) {
            __.entities.push(junk.spawn());            
        }
        __.entities = __.updateEntities(__.entities, delta, context);
        __.bubbles =__.updateEntities(__.bubbles, delta, context);
    };
    
    interact = function (mousePos) {
        __.bubbles.push(bubble.spawn(mousePos));
    };

    return {
        update: update,
        interact: interact,
        init: init
    };
    
}());
