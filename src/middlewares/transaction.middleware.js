const { namespase } = require('../services/cls')
const { v4: uuidv4 } = require('uuid')
const logger = require('../logger')

const requestIdMiddleware = (req, res, next) => {
  namespase.run(() => {
    const transactionId = uuidv4()
    namespase.set('transactionId', transactionId)
    logger.info(`req.path:`, req.path)
    logger.info(`req.params:`, req.params)
    logger.info(`req.query:`, req.query)
    logger.info(`req.body:`, req.body)
    req.transactionId = transactionId
    res.results = []
    next()
  })
}

module.exports = requestIdMiddleware
