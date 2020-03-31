const logger = require('../shared/logger')

const errorMiddleware = (err, req, res, next) => {
  const { code, type, statusCode: status = 500, stack, message, info } = err
  const data = null
  const error = { code, type, message, info }
  logger.error(error)
  res.status(status).json({ status, data, error })
}

module.exports = errorMiddleware
