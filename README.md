# tu-logger
Un n-ième logger pour node

	// niveau par défaut : warn
	var logger = require('tu-logger')();

	// niveau spécifié au moment du require
	var logger = require('tu-logger')('info');

	// niveau spécifié à un autre moment 
	logger.setLevel('debug');

	// remettre le niveau par défaut
	logger.setLevel();

	// différent niveaux de log
	logger.debug('message');
	logger.info('message');
	logger.warn('message');
	logger.error('message');
	logger.fatal('message');

	// formatage spécifique [%s: chaine, %j: json, %d: numérique]
	logger.info('%s %d %j', a, b, c);
