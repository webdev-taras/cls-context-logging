const test = require('ava')
const { namespase } = require('../../src/shared/cls')
const { transaction } = require('../../src/middlewares')

test.cb('transaction.middleware generates transactionId', t => {
  const req = {}
  const res = {}
  transaction(req, res, () => {
    const transactionId = namespase.get('transactionId')
    t.truthy(req.transactionId)
    t.is(req.transactionId, transactionId)
    t.regex(transactionId, /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)
    t.end()
  })
})