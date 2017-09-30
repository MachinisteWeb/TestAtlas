exports.setModules = function () {
	var NA = this;
	NA.modules.marked = require("marked");
};

exports.setRoutes = function (next) {
	var NA = this,
		fs = NA.modules.fs,
		jsdom = NA.modules.jsdom,
		async = NA.modules.async,
		marked = NA.modules.marked,
		route = NA.webconfig.routes;

	fs.readFile("../../node-atlas-gh-pages/README.en.md", "utf-8", function (err, content) {
		if (err) {
			new Error("README File not found.");
			return next();
		}

		var dom = new jsdom.JSDOM(marked(content)),
			allRoutes = [];

		Array.prototype.forEach.call(dom.window.document.getElementsByTagName("h2"), function (h2) {
			allRoutes.push(function (nextRoute) {
				var htmlElement = h2,
					nextUntil = [],
					until = true;
				while (htmlElement = htmlElement.nextElementSibling) {
					(until && htmlElement && !htmlElement.matches("h2")) ? nextUntil.push(htmlElement.outerHTML) : until = false;
				}

				fs.writeFile("assets/content/" + h2.getAttribute("id") + ".htm", h2.outerHTML + nextUntil.join(''), function () {

					if (route instanceof Array) {
						route.push({
							"url": "/" + h2.getAttribute("id") + ".html",
							"view": "content.htm"
						});
					} else {
						route["/" + h2.getAttribute("id") + ".html"] = {
							"view": "content.htm"
						};
					}

					nextRoute();
				});
			});
		});

		async.parallel(allRoutes, function() {
			next();
		});
	});
};

exports.changeVariations = function (next, locals) {
	var NA = this,
		fs = NA.modules.fs;

	fs.readFile("assets/content/" + locals.route.replace(".html", ".htm"), "utf-8", function (err, content) {
		if (err) {
			return next();
		}

		locals.common.content = content;

		next();
	});
};