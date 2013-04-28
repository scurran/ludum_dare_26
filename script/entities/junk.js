var junk = (function () {
    
    var update, spawn, alive, collide, __ = {};
    
    update = function (delta, ctx) {
        this.x += this.speed * delta * Math.cos(this.direction);
        this.y += this.speed * delta * Math.sin(this.direction);
        this.life -= 1;
        draw.square(ctx, {
            x: this.x,
            y: this.y,
            r: this.r,
            color: (this.name === "bad_junk") ? 'black' : 'green'
        });
    };
    
    alive = function () {
        return (this.life > 0);
    };
    
    collide = function (ent) {
        var dy = this.x - ent.x,
            dx = this.y - ent.y,
            nudge = ent.r / 2;
        this.direction = Math.atan2(dx,dy);
        this.x += nudge * Math.cos(this.direction);
        this.y += nudge * Math.sin(this.direction);
    };
    
    spawn = function () {
        var direction, x, y, radius = 300, angle;
        angle = Math.random() * (Math.PI * 2);
        x = 300 + radius * Math.cos(angle);
        y = 200 + radius * Math.sin(angle);
        direction = Math.atan2(200-y, 300-x);
        return {
            name: (Math.random() > 0.9) ? "good_junk" : "bad_junk",
            direction: direction,
            x: x,
            y: y,
            r: 3,
            speed: 2,
            life: 180,
            update: update,
            alive: alive,
            collisionCheck: mixins.collisionCheck,
            collide: collide
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
