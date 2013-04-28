var gamePlay = (function() {

    var update, 
        init,
        interact,
        context, 
        __ = {};

    __.entities = [];
    __.bubbles = [];
    __.player = player.spawn();
    __.maxEntities = 7;
    __.maxBubbles = 30;

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
    
    __.doCollisions = function (entsA, entsB) {
        var i, j, entitiesCountA, entitiesCountB;
        for (i = 0, entitiesCountA = entsA.length; i < entitiesCountA; i++) {
            for (j = 0, entitiesCountB = entsB.length; j < entitiesCountB; j++) {
                entsB[j].collisionCheck(entsA[i]);
            }
        }
    };
    
    update = function (delta) {
        draw.clear(context, 'white');
        if ((__.entities.length < __.maxEntities) && (Math.random() > 0.9)) {
            __.entities.push(junk.spawn());            
        }
        __.player.update(delta, context);
        __.doCollisions(__.bubbles, __.entities);
        __.doCollisions(__.entities, [__.player]);
        __.entities = __.updateEntities(__.entities, delta, context);
        __.bubbles =__.updateEntities(__.bubbles, delta, context);
        draw.write(context, {
            x: 10,
            y: 20,
            color: 'black',
            text: "Score: " + __.player.life
        });
        
    };
    
    interact = function (mousePos) {
        if (__.bubbles.length < __.maxBubbles) {
            __.bubbles.push(bubble.spawn(mousePos));            
        }
    };

    return {
        update: update,
        interact: interact,
        init: init
    };
    
}());
