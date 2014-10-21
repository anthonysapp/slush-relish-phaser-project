var Menu = function () {

};

Menu.prototype = Object.create(Phaser.State.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype = {

    init: function () {

    },

    create: function () {
        this.game.input.onDown.add(this.startGame, this);
    },

    startGame: function () {
        this.game.state.start('game');
    }
};

module.exports = Menu;