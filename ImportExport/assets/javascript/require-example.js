/* global require */
var commonjs = require("javascript/modules/commonjs.js"),
	amd = require("javascript/modules/amd.js"),
	simple = require("javascript/modules/simple.js"),
	systemjs = require("javascript/modules/systemjs.js")/*,

	// Error if ES6 not supported
	es = require("javascript/modules/es.js").default,
	esNamedA = require("javascript/modules/es.js").A,
	B = require("javascript/modules/es.js").B*/;



console.log(simple("JS", "Simple"));
console.log(commonjs("JS", "CommonJS"));
console.log(amd("JS", "AMD"));
console.log(systemjs("JS", "SystemJS"));
//console.log(es("JS", "ES Default"));
//console.log(esNamedA("JS", "ES Named A"));
//console.log(B("JS", "ES Named B"));