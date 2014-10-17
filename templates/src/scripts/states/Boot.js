var Boot = function () {

}

Boot.prototype = {

    preload: function () {
        //load the assets for the preload state here
    },

    create: function () {
        // max number of fingers to detect
        this.input.maxPointers = 1;

        // auto pause if window looses focus
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            this.stage.scale.pageAlignHorizontally = true;
        }

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.setScreenSize(true);

        this.game.state.start('preload', true, false);
    }

}

module.exports = Boot;
