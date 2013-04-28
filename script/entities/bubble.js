var bubble = (function () {
    
    var update, spawn, alive;
    
    update = function (delta, ctx) {
        draw.square(ctx, {
            x: this.x,
            y: this.y,
            r: this.r,
            color: 'rgba(00,153,255,' + (this.life/50) +')'
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
            r: 4,
            life: 50
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
