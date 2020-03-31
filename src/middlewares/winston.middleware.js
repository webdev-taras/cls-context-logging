const { createLogger, format, transports } = require('winston')
const { namespase } = require('../shared/cls')

const formatTransactionId = format((info) => {
  const transactionId = namespase.get('transactionId')
  if (transactionId) {
    info.message = `[${transactionId}] ${info.message}`
  }
  return info
})

const logger = createLogger({
  format: format.combine(
    formatTransactionId(),
    format.simple(),
  ),
  transports: [new transports.Console()],
  exitOnError: false,
})

module.exports = (req, res, next) => {
  const url = req.originalUrl || req.url
  req._startTime = (new Date)

  const end = res.end;
  res.end = function (chunk, encoding) {
    res.responseTime = (new Date) - req._startTime

    res.end = end
    res.end(chunk, encoding)

    const message = `${req.method} ${url} ${res.statusCode} - ${res.responseTime} ms`
    logger.info(message)

    // logger.info(`req.path:`, req.path)
    // logger.info(`req.query:`, req.query)
    if (Object.keys(req.params)) {
      logger.info(`req.params:`, req.params)
    }
    if (req.body && Object.keys(req.body)) {
      logger.info(`req.body:`, req.body)
    }
    if (req.cookies && Object.keys(req.cookies)) {
      logger.info(`req.cookies:`, req.cookies)
    }
    if (chunk) {
      const isJson = (res.getHeader('content-type')
          && res.getHeader('content-type').indexOf('json') >= 0);
      const body = chunk.toString()
      res.body = bodyToString(body, isJson);
      logger.info(`response:`, res.body)
    }
  }
  next()
}

function safeJSONParse(string) {
  try {
      return JSON.parse(string);
  } catch (e) {
      return undefined;
  }
}

function bodyToString(body, isJSON) {
  var stringBody = body && body.toString();
  if (isJSON) {
      return (safeJSONParse(body) || stringBody);
  }
  return stringBody;
}
