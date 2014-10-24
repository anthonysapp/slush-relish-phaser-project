var global = require('../global');

var PreloadHelper = function () {
};

PreloadHelper.loadAtlas = function (state, url) {

    if (typeof state === 'undefined'){
        throw 'you must pass a valid state';
    }

    return state.load.atlasXML(url, global.spritesheetPath + '/' + url + '.png', global.spritesheetPath + '/' + url + '.xml');
};

PreloadHelper.loadImage = function(state, url, ext){

    if (typeof ext === 'undefined'){
        ext = 'jpg';
    }

    return state.load.image(url, global.imgPath + '/' + url + '.' + ext);
}

module.exports = PreloadHelper;