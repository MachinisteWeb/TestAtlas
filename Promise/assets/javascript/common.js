"use strict";

var Promise = this.Promise,
    XMLHttpRequest = this.XMLHttpRequest;

function get(url) {
    // Renvoie une nouvelle promesse.
    return new Promise(function (resolve, reject) {
        // Fais le boulot XHR habituel
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.addEventListener("load", function () {
            // Ceci est appelé même pour une 404 etc.
            // aussi vérifie le statut
            if (req.status === 200) {
                // Accomplit la promesse avec le texte de la réponse
                resolve(req.response);
            } else {
                // Sinon rejette avec le texte du statut
                // qui on l’éspère sera une erreur ayant du sens
                reject(new Error(req.statusText));
            }
        });

        // Gère les erreurs réseau
        req.addEventListener("error", function () {
            reject(new Error("Erreur réseau"));
        });

        // Lance la requête
        req.send();
    });
}

function getJSON(url) {
    return get(url).then(JSON.parse);
}

function addHtmlToPage(content) {
    document.querySelector('body').insertAdjacentHTML("beforeend", content);
}

function getJSONLog(url) {
    return get(url).then(JSON.parse).catch(function (err) {
        console.log("getJSONLog a échoué sur ", url, err);
        throw err;
    });
}