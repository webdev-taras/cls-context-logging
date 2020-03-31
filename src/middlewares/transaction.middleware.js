const { namespase } = require('../shared/cls')
const { v4: uuidv4 } = require('uuid')

const transactionIdMiddleware = (req, res, next) => {
  namespase.bind(req)
  namespase.bind(res)

  namespase.run(() => {
    const transactionId = uuidv4()
    namespase.set('transactionId', transactionId)
    req.transactionId = transactionId
    next()
  })
}

module.exports = transactionIdMiddleware
