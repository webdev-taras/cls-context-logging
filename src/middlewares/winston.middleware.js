const { createLogger, format, transports } = require('winston')

const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
  exitOnError: false,
})

module.exports = (req, res, next) => {
  
  const url = req.originalUrl || req.url;
  const responseTime = 0 //res.responseTime
  // logger.info(`req.cookies:`, req.cookies)
  // logger.info(`req.path:`, req.path)
  // logger.info(`req.query:`, req.query)
  // logger.info(`req.params:`, req.params)
  // logger.info(`req.body:`, req.body)

  const message = `${req.method} ${url} ${res.statusCode} - ${responseTime} ms`
  logger.info(message)
  next()
}