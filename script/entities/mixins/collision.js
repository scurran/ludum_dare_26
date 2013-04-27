var mixins = {};

mixins.collisionCheck = function (ent) {
    var dx = this.x - ent.x,
        dy = this.y - ent.y;
    if ((dx*dx + dy*dy) < (this.r * ent.r * 4)) {
        this.collide(ent);
    }
};
