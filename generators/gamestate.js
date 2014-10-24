var PreloadHelper = require('../utils/PreloadHelper');
var Game = require('./Game');

var __NAMESPACE__ = function () {
    this.name = ('__NAMESPACE__').charAt(0).toLowerCase() + ('__NAMESPACE__').substr(1, ('__NAMESPACE__').length); //give your state a name so it gets properly added to the state history list
    Game.call(this);
};

__NAMESPACE__.prototype = Object.create(Game.prototype);
__NAMESPACE__.prototype.constructor = __NAMESPACE__;

__NAMESPACE__.prototype.preload = function () {
    //load a background image
    //PreloadHelper.loadImage(this, 'theatre-bg');

    //load a texture atlas
    //PreloadHelper.loadAtlas(this , 'theatre');
};

__NAMESPACE__.prototype.init = function () {
    Game.prototype.init.call(this);
};

__NAMESPACE__.prototype.create = function () {
    Game.prototype.create.call(this);
};

module.exports = __NAMESPACE__;
