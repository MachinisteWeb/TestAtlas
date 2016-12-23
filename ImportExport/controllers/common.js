/* jslint node: true */
var common = {};

common.components = {};

(function (publics) {

    common.components.systemAtlas = require('./modules/system-atlas');

    publics.changeVariations = function (next, locals) {

        locals.common.helloWorld = common.components.systemAtlas.helloWorld();

        next();
    };

}(common));

exports.changeVariations = common.changeVariations;