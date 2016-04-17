/* global System */
/*System.register("systemjs", [], function (_export) {
	return {
	    setters: [],
	    execute: function () {
      		_export("systemjs", function (foo, bar) {
				return foo + " " + bar;
			});
	    }
	};
});*/

(function (require, exports, module) {
	module.exports = function (foo, bar) {
		return foo + " " + bar;
	};
}).apply(__cjsWrapper.exports, __cjsWrapper.args);