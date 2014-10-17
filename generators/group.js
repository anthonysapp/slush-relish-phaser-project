var __NAMESPACE__ = function (game, parent, name, addToStage, enableBody, physicsBodyType) {
    Phaser.Group.call(this, game, parent, '__NAMESPACE__', addToStage, enableBodym, physicsBodyType)
}

__NAMESPACE__.prototype = Object.create(Phaser.Group.prototype);
__NAMESPACE__.prototype.constructor = __NAMESPACE__;

/**
 * Automatically called by World.update
 */
__NAMESPACE__.prototype.update = function() {

};

module.exports = __NAMESPACE__;