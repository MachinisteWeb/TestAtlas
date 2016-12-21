/* jslint node: true */
var common = {};

common.components = {};

(function (publics) {

    common.components.systemAtlas = require('./modules/system-atlas');

    publics.changeVariations = function (params, mainCallback) {
        var variations = params.variations;

        variations.common = variations.common || {};
        variations.common.helloWorld = common.components.systemAtlas.helloWorld();

        mainCallback(variations);
    };

}(common));

exports.changeVariations = common.changeVariations;