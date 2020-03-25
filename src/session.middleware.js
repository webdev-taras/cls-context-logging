const { namespase } = require('./cls')
const { v4: uuidv4 } = require('uuid')
const logger = require('./logger')

const requestIdMiddleware = (req, res, next) => {
  namespase.run(() => {
    const sessionId = uuidv4()
    namespase.set('sessionId', sessionId)
    logger.info(`req.path:`, req.path)
    logger.info(`req.params:`, req.params)
    logger.info(`req.body:`, req.body)
    next()
  })
}

module.exports = requestIdMiddleware
