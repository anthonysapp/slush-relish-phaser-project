

var Test = function (game, x, y, key, frame) {
    Phaser.Sprite.call(this, game, x, y, key, frame);
    //game.add.existing(this);
}

Test.prototype = Object.create(Phaser.Sprite.prototype);
Test.prototype.constructor = Test;

/**
 * Automatically called by World.update
 */
Test.prototype.update = function() {
};

module.exports = Test;