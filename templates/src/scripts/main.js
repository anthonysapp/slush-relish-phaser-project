var global = require ('./global');

var Analytics = require('./utils/Analytics');

var game, App = {};

App.start = function() {
    game = new Phaser.Game(
        <%= width %>, <%= height %>,
        Phaser.AUTO,
        'game-container'
    );

    game.analytics = new Analytics('<%= name %>');

    game.state.add('boot', require('./states/Boot'));
    game.state.add('preload', require('./states/Preload'));
    game.state.add('menu', require('./states/Menu'));
    game.state.add('game', require('./states/Game'));

    game.state.start('boot');

    return game;
};

App.start();

module.exports = App;