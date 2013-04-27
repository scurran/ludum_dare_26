var mixins = {};

mixins.collisionCheck = function (ent) {
    var dx = this.x - ent.x,
        dy = this.y - ent.y,
        r2 = (this.r + ent.r) * (this.r + ent.r);
    if ((dx*dx + dy*dy) < r2) {
        this.collide(ent);
    }
};
