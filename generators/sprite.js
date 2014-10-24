var __NAMESPACE__ = function (game, x, y, key, frame) {
    Phaser.Sprite.call(this, game, x, y, key, frame);
    //game.add.existing(this);
};

__NAMESPACE__.prototype = Object.create(Phaser.Sprite.prototype);
__NAMESPACE__.prototype.constructor = __NAMESPACE__;

__NAMESPACE__.prototype.update = function() {

};

module.exports = __NAMESPACE__;