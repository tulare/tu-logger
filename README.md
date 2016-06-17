# tu-logger
Un n-ième logger pour node

	// niveau par défaut : warn
	var logger = require('tu-logger')();

	// niveau spécifié au moment du require
	var logger = require('tu-logger')('info');

	// voir les niveaux existants
	logger.showLevels();

	// niveau spécifié à un autre moment 
	logger.setLevel('debug');

	// invalider toute sortie
	logger.setLevel('none');

	// activer toutes les sorties :
	// utiliser tout mot différent des niveaux existants (ex: all)
	logger.setLevel('all');

	// remettre le niveau par défaut
	logger.setLevel();

	// différent niveaux de log
	logger.debug('message');
	logger.info('message');
	logger.notice('message');
	logger.warn('message');
	logger.error('message');
	logger.fatal('message');

	// formatage spécifique [%s: chaine, %j: json, %d: numérique]
	logger.info('%s %d %j', 'coucou', 123, http);
