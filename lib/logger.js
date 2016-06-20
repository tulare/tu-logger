'use strict';

var util = require('util');

// =====================================================================
//			Fonctions exportées par module paramétrable
// =====================================================================
module.exports = function(level) {
	// Préparer le module à renvoyer
	var module = {};

	// -----------------------------------------------------------------
	// 						Partie privée
	// -----------------------------------------------------------------

	// Liste des niveau de log par importance croissante
	var levels = ['debug', 'info', 'notice', 'warn', 'error', 'fatal', 'none'];

	// padding pour affichage aligné des niveaux de log
	var padding = Array(
		levels.reduce((prec, cur) => prec < cur.length ? cur.length : prec, 0) + 1
	).join(' ');

	// Niveau de log par défaut
	var debugLevel = level || 'warn';

	// Corps de la fonction de log
	var log = function(level) {
		var args = Array.from(arguments).slice(1);
		

		if (levels.indexOf(level) >= levels.indexOf(debugLevel)) {
			// Ecriture dans la log
			console.log(
				new Date().toLocaleString(),
				'::',
				("     " + process.pid).slice(-5),
				'::',
				(level.toUpperCase() + padding).slice(0, padding.length), 
				'::',
				util.format.apply(null, args)
			);
		}
	};

	// -----------------------------------------------------------------
	// 						Partie publique
	// -----------------------------------------------------------------

	// Lister les niveau de log
	module.showLevels = function() {
		return levels;
	};

	// récupérer le niveau de log par défaut
	module.getLevel = function() {
		return debugLevel;
	};

	// Fixer le niveau de log par défaut
	module.setLevel = function(level) {
		debugLevel = level || 'warn';
		return debugLevel;
	};

	// Exporter une fonction pour chaque niveau de log (sauf 'none')
	levels.forEach(function(level) {
		if (level == 'none')
			return;
		module[level] = function() {
			var args = Array.from(arguments);
			args.unshift(level);
			log.apply(null, args);
		};
	});

	// Renvoyer le module paramétré
	return module;
};

