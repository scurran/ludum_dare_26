var junk = (function () {
    
    var update, spawn, __ = {};
    
    update = function (delta, ctx) {
        this.x += this.speed * delta * Math.sin(this.direction);
        this.y += this.speed * delta * Math.cos(this.direction);
        
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };
    
    spawn = function () {
        return {
            x: 300,
            y: 200,
            direction: Math.random() * (Math.PI * 2),
            speed: 1,
            update: update,
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
