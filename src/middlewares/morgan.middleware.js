const morgan = require('morgan')

// module.exports = morgan('tiny')

morgan.token('transactionId', function (req) {
  return `[${req.transactionId}]`
})

module.exports = morgan(function (tokens, req, res) {
  return [
    tokens.transactionId(req, res),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})