const { namespase } = require('../services/cls')
const { v4: uuidv4 } = require('uuid')
const logger = require('../logger')

const requestIdMiddleware = (req, res, next) => {
  namespase.run(() => {
    const transactionId = uuidv4()
    namespase.set('transactionId', transactionId)
    req.transactionId = transactionId
    next()
  })
}

module.exports = requestIdMiddleware
