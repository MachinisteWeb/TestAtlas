/* global require */
var commonjs = require("javascripts/modules/commonjs.js"),
	amd = require("javascripts/modules/amd.js"),
	simple = require("javascripts/modules/simple.js"),
	systemjs = require("javascripts/modules/systemjs.js")/*,

	// Error if ES6 not supported
	es = require("javascripts/modules/es.js").default,
	esNamedA = require("javascripts/modules/es.js").A,
	B = require("javascripts/modules/es.js").B*/;



console.log(simple("JS", "Simple"));
console.log(commonjs("JS", "CommonJS"));
console.log(amd("JS", "AMD"));
console.log(systemjs("JS", "SystemJS"));
//console.log(es("JS", "ES Default"));
//console.log(esNamedA("JS", "ES Named A"));
//console.log(B("JS", "ES Named B"));