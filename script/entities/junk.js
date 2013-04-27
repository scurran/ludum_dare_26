var junk = (function () {
    
    var update, spawn, __ = {};
    
    update = function (delta, ctx) {
        this.x -= this.speed * delta * Math.sin(this.direction);
        this.y -= this.speed * delta * Math.cos(this.direction);
        
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
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
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
