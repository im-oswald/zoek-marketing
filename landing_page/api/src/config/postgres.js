const { Client } = require('pg');
const config = require('./config');
const logger = require('./logger');

let client;

(async function name() {
	client = new Client(config.DB_URL ? config.DB_URL : config.sqlDB);
	try {
		await client.connect();
		logger.info('Connect to postgress sucessfully');
		return client;
	} catch (error) {
		logger.error('Connect to postgress error');
		process.exit(1);
	}
})();

module.exports = {
	postgres: client,
};
