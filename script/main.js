var game = (function() {
    var start;

    start = function() {
        var now = 0,
            then = Date.now(),
            interval = 30,
            delta = 1;

        gamePlay.init(document.getElementById('canvas').getContext('2d'));
        setInterval(function() {
            now = Date.now();
            delta = (now - then) / interval;
            gamePlay.update(delta);
            then = now;
        }, interval);
    };

    return {
        start: start
    };
}());

window.onload = function() {
    game.start();
};
