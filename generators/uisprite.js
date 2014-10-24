var UISprite = require('../UISprite');

var __NAMESPACE__ = function (game, x, y, key, frame, name, autoAdd) {
    UISprite.call(this, game, x, y, key, frame, name, autoAdd);
};

__NAMESPACE__.prototype = Object.create(UISprite.prototype);
__NAMESPACE__.prototype.constructor = __NAMESPACE__;

__NAMESPACE__.prototype.update = function() {
    UISprite.prototype.update.call(this);
};

__NAMESPACE__.prototype.init = function(){
    UISprite.prototype.init.call(this);
};

__NAMESPACE__.prototype.buildInterface = function(){
    UISprite.prototype.buildInterface.call(this);
};

module.exports = __NAMESPACE__;