const winston = require('winston');
require('winston-mongodb');
const {LOG_DB_URL} = require('./server.js');

const allowedTransports = [];

//configuration to console the logs
allowedTransports.push(new winston.transports.Console())

//congiguration to save the error logs to mongoDB
allowedTransports.push(new winston.transports.MongoDB({
    level : 'error',
    db: LOG_DB_URL,
    collection: 'log'
}))

//configuration of logger
const logger = winston.createLogger({
    format : winston.format.combine(
        //first argument to define the timestamp of logs
        winston.format.timestamp({
            format : 'YYYY-MM-DD HH:mm:ss'
        }),

        //second argument that defines how the logs will look like
        winston.format.printf((log)=>{
           return  `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
        }), 

        //
    ),
    transports : allowedTransports
})

module.exports = logger;