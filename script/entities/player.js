var player = (function () {
    
    var update, spawn, alive, collide, __ = {};
    
    __.getThoughtsTexture = function (radius) {
        var thoughtsTexture = 'art/thoughts.png';
        
        if (radius > 48) {
            thoughtsTexture = 'art/thoughts_1.png';
        }
        
        if (radius > 64) {
            thoughtsTexture = 'art/thoughts_2.png';
        }
        
        if (radius > 88) {
            thoughtsTexture = 'art/thoughts_3.png';
        }
        
        return thoughtsTexture;
    };
    
    update = function (delta, ctx) {
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
            src: __.getThoughtsTexture(this.r)
        });

    };
    
    alive = function () {
        return (this.life > 0);
    };
    
    collide = function (ent) {
        switch (ent.name) {
            case 'bad_junk':
                ent.life = 0;
                this.r += 3;
                break;
            case 'good_junk':
                ent.life = 0;
                this.life += 1
                break;
        }
    };
    
    spawn = function (options) {
        return {
            update: update,
            alive: alive,
            collisionCheck: mixins.collisionCheck,
            collide: collide,
            x: 300,
            y: 200,
            r: 32,
            life: 1
        };
    };
    
    return {
        spawn: spawn
    };
    
}());
