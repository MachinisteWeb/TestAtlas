// On intervient avant que le DOM ne soit renvoyé au Client.
// Ce code sera exécuté uniquement lors de la demande de la page « / ».
exports.changeDom = function (next, locals) {
	var NA = this,
		jsdom = NA.modules.jsdom, // Récupération de jsdom pour parcourir le DOM virtuel.
		dom = new jsdom.JSDOM(locals.dom); // On charge les données pour les manipuler comme un DOM.

	// On modifie tous les contenu des noeuds avec la classe `.title`,
	dom.window.document.getElementsByClassName("title")[0].textContent = "Modification de Contenu";

	// On recrée une nouvelle sortie HTML avec nos modifications.
	locals.dom = dom.serialize();

	// On passe à la suite.
	next();
};