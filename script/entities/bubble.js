var bubble = (function () {
    
    var update, spawn, alive;
    
    update = function (delta, ctx) {
        draw.dot(ctx, this.x, this.y, "yellow");
        this.life -= delta;
    };
    
    alive = function () {
        return (this.life > 0);
    };
    
    spawn = function (options) {
        return {
            update: update,
            alive: alive,
            x: options.x,
            y: options.y,
            life: 10
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
