var player = (function () {
    
    var update, spawn, alive, collide;
    
    update = function (delta, ctx) {
        var thoughtsTexture = 'art/thoughts.png';
        
        if (this.r > 48) {
            thoughtsTexture = 'art/thoughts_1.png';
        }
        
        if (this.r > 64) {
            thoughtsTexture = 'art/thoughts_2.png';
        }
        
        if (this.r > 88) {
            thoughtsTexture = 'art/thoughts_3.png';
        }
        
        draw.texture(ctx, {
            x: this.x,
            y: this.y,
            r: 16,
            src: 'art/meditation.png'
        });
        
        draw.texture(ctx, {
            x: this.x,
            y: this.y,
            r: this.r,
            src: thoughtsTexture
        });

    };
    
    alive = function () {
        return (this.life > 100);
    };
    
    collide = function (ent) {
        ent.life = 0;
        this.r += 3;
    }
    
    spawn = function (options) {
        return {
            update: update,
            alive: alive,
            collisionCheck: mixins.collisionCheck,
            collide: collide,
            x: 300,
            y: 200,
            r: 32,
            life: 0
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
