const morgan = require('morgan')
const { namespase } = require('../services/cls')

// module.exports = morgan('tiny')

module.exports = morgan(function (tokens, req, res) {
  const transactionId = namespase.get('transactionId')
  return [
    `[${transactionId}]`,
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})