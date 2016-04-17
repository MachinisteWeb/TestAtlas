/* jslint node: true */
var common = {};

common.components = {};

(function (publics) {

    common.components.systemAtlas = require('../components/system-atlas');

    publics.changeVariation = function (params, mainCallback) {
        var variation = params.variation;

        variation.common = variation.common || {};
        variation.common.helloWorld = common.components.systemAtlas.helloWorld();

        mainCallback(variation);
    };

}(common));

exports.changeVariation = common.changeVariation;