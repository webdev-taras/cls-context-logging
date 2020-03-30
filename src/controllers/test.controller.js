const doSomething = require('../services/do.something.service')
const logger = require('../logger')

module.exports = (req, res, next) => {
  const id = Number(req.query.id) || 0
  const delay = Number(req.query.delay) || 0
  const transactionId = req.transactionId
  const uuid = logger.debug(`doSomething.id:`, id)

  logger.info(`req.path:`, req.path)
  logger.info(`req.params:`, req.params)
  logger.info(`req.query:`, req.query)
  logger.info(`req.body:`, req.body)

  res.results = [uuid]
  
  doSomething({ id, delay })
    .then(result => {
      res.results.push(result)
      return doSomething({ id, delay })
    })
    .then(result => {
      res.results.push(result)
      res.statusCode = 200
      res.data = { id, transactionId, results: res.results }
      next()
    })
    .catch(next)
}