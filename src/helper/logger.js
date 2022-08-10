const os = require("os");
const winston = require("winston");
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: "logs/error.log",
            level: 'error',
        }),
        new winston.transports.File({
            filename: 'logs/info.log',
            level: 'info',
        }),
        new DailyRotateFile({
            filename: 'application-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            dirname: 'logs',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '60d'
        })
    ]
});


const info = (log1, ...metadata) => {
    log("info", log1, metadata);
}

const error = (log1, metadata) => {
    log("error", log1, metadata);
}

const log = (level, log, metadata, stackTrace) => {
    const metadataObject = {};

    if (metadata) metadataObject.metadata = metadata;
    if (stackTrace) metadataObject.stackTrace = stackTrace;

    if (this.checkSensitiveFields) {
        const sensitiveFieldFound = Object.keys(
            metadataObject.metadata || {}
        ).find(key => this.sensitiveFields.includes(key));
        if (sensitiveFieldFound)
            return logTrace("warn", `You tried to log the following sensitive key: "${sensitiveFieldFound}". Please check attached stack trace.`);
    }

    if (log instanceof Error) {
        return this.logger[level](log.message, {
            metadata: { stack: log.stack }
        });
    }
    this.logger[level](log, metadataObject);
}

const logTrace = (level, log1, metadata) => {
    const stackTrace = new Error().stack;
    log(level, log1, metadata, stackTrace);
}

module.exports = logger;
