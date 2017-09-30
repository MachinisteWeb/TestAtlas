// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (next, locals) {
	var dom = locals.virtualDom(); // Transformer la chaîne HTML en DOM virtuel.

	// Après tous les h1 de la sortie HTML « dom »,
	Array.prototype.forEach.call(dom.window.document.getElementsByTagName("h1"), function (h1) {
		// ...on créé une div,
		var div = dom.window.document.createElement('div');
		// ... on injecte le contenu du h1 dans la div,
		div.innerHTML = h1.innerHTML;
		h1.parentNode.insertBefore(div, h1.nextElementSibling);
		// ...et supprime le h1.
		h1.parentNode.removeChild(h1);
	});

	// On retourne les modifications pour qu'elles redeviennet une chaîne HTML.
	next(dom);
};