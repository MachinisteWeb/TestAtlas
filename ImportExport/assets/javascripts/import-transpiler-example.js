/*jshint esversion: 6 */
import commonjs from "javascripts/modules/commonjs.js";
import amd from "javascripts/modules/amd.js";
import simple from "javascripts/modules/simple.js";
import systemjs from "javascripts/modules/systemjs.js";
import es from "javascripts/modules/es.js";
import {A as esNamedA} from "javascripts/modules/es.js";
import {B} from "javascripts/modules/es.js";

console.log(simple("JS", "Simple"));
console.log(commonjs("JS", "CommonJS"));
console.log(amd("JS", "AMD"));
console.log(systemjs("JS", "SystemJS"));
console.log(es("JS", "ES Default"));
console.log(esNamedA("JS", "ES Named A"));
console.log(B("JS", "ES Named B"));