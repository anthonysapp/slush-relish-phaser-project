var Game = function () {

}

Game.prototype = Object.create(Phaser.State.prototype);
Game.prototype.constructor = Game;

Game.prototype = {

    create: function () {
        console.log('Hello Game!');
    }

}

module.exports = Game;
