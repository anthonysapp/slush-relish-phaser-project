var Preload = function () {

}

Preload.prototype = {

    constructor: function () {

    },

    preload: function () {
        // Show the preloader here (example preloader sprite below)
        /*
         this.loadingSprite = this.add.sprite(320, 480, 'preloader');
         this.loadingSprite.anchor.setTo(0.5, 0.5);
         this.load.setPreloadSprite(this.loadingSprite);
         */

        // Load game assets here (example below)
        /*
         this.load.image('logo', 'assets/logo.png');
         */
    },

    create: function () {
        // (optionally) show the splash page or menu when the load completes
        this.game.state.start('menu', true, false);
    }

}

module.exports = Preload;