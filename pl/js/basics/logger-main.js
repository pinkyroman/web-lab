// import { default as Logger, Category, Level } from './simple-logger.js';
import { default as Logger, Category, Level } from './simple-logger.js';

let logger = new Logger('System > Resources', Category.OPERATION, Level.INFO);
let logger2 = new Logger('Monitor > Hardware', Category.DOCUMENT, Level.INFO);

console.log(logger);
console.log(logger2);

logger.disableConsoleOutput().critical('this is CRITICAL level message.');
// logger.major('this is MAJOR level message.');
// logger.minor('this is MINOR level message.');
// logger.error('this is ERROR level message.');
// logger.info('this is INFO level message.');
// logger.warning('this is WARNING level message.');
// logger.debug('this is DEBUG level message.');

logger2.enableConsoleOutput()
    .critical('Monitor is down!')
    .disableConsoleOutput()
    .info('Contact your administrator.');
logger2.log('Monitor is up!', Category.OPERATION, Level.INFO);

logger.level = Level.DEBUG;
logger2.level = Level.ERROR;
logger2.log('THIS MESSAGE FROM THE SECOND LOGGER');
logger.log('THIS MESSAGE FROM THE FIRST LOGGER');
