var junk = (function () {
    
    var update, spawn, alive, __ = {};
    
    update = function (delta, ctx) {
        this.x += this.speed * delta * Math.cos(this.direction);
        this.y += this.speed * delta * Math.sin(this.direction);
        this.life -= 1;
        draw.dot(ctx, this.x, this.y, "white");
    };
    
    alive = function () {
        return (this.life > 0);
    };
    
    spawn = function () {
        var direction, x, y, radius = 300, angle;
        angle = Math.random() * (Math.PI * 2);
        x = 300 + radius * Math.cos(angle);
        y = 200 + radius * Math.sin(angle);
        direction = Math.atan2(200-y, 300-x);
        // console.log(direction, Math.PI/2)
        return {
            direction: direction,
            x: x,
            y: y,
            speed: 3,
            life: 180,
            update: update,
            alive: alive,
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
