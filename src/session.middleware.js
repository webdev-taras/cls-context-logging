const { namespase } = require('./cls')
const { v4: uuidv4 } = require('uuid')
const logger = require('./logger')

const requestIdMiddleware = (req, res, next) => {
  namespase.run(() => {
    const sessionId = uuidv4()
    namespase.set('sessionId', sessionId)
    logger.info(`new sessionId`)
    next()
  })
}

module.exports = requestIdMiddleware
