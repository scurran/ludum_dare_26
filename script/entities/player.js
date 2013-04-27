var player = (function () {
    
    var update, spawn, alive, collide;
    
    update = function (delta, ctx) {
        draw.outline(ctx, {
            x: this.x,
            y: this.y,
            r: this.r,
            color: '#668888'
        });
    };
    
    alive = function () {
        return (this.life > 0);
    };
    
    collide = function (ent) {
        ent.life = 0;
        this.r += 3;
        console.log('collision');
    }
    
    spawn = function (options) {
        return {
            update: update,
            alive: alive,
            collisionCheck: mixins.collisionCheck,
            collide: collide,
            x: 300,
            y: 200,
            r: 45,
            life: 10
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
