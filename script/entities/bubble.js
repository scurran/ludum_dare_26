var bubble = (function () {
    
    var update, spawn, alive;
    
    update = function (delta, ctx) {
        draw.dot(ctx, {
            x: this.x,
            y: this.y,
            r: this.r,
            color: '#668888'
        });
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
            r: 3,
            life: 50
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
