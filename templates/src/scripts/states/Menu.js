var Menu = function () {

}

Menu.prototype = {
    init: function (settings) {

    },

    create: function () {
        this.game.input.onDown.add(this.startGame, this);
    },

    startGame: function () {
        this.game.state.start('game');
    }
}

module.exports = Menu;