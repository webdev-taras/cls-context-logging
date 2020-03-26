const createError = require('http-errors')
const logger = require('../logger')

const responseMiddleware = (req, res, next) => {
  const { statusCode: status = 200, data } = res
  if (data) {
    res.data = undefined
    logger.info('res.data', data)
    res.status(status).json({ status, data })
  } else {
    next(createError(404))
  }
}

module.exports = responseMiddleware
