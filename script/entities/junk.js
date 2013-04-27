var junk = (function () {
    
    var update, spawn, alive, __ = {};
    
    update = function (delta, ctx) {
        this.x -= this.speed * delta * Math.sin(this.direction);
        this.y -= this.speed * delta * Math.cos(this.direction);
        
        draw.dot(ctx, this.x, this.y, "white");
    };
    
    alive = function () {
        return true;
    };
    
    spawn = function () {
        var direction, x, y;
        direction = Math.random() * (Math.PI * 2)
        x = 300 + Math.sin(direction)*100;
        y = 200 + Math.cos(direction)*500;
        return {
            direction: direction,
            x: x,
            y: y,
            speed: 3,
            update: update,
            alive: alive
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
