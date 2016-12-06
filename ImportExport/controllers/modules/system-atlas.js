/* jslint node: true */
var systemAtlas = {};

(function (publics) {

    publics.helloWorld = function () {
        return "Hello World";
    };

}(systemAtlas));

exports.helloWorld = systemAtlas.helloWorld;