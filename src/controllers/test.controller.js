const doSomething = require('../services/do.something.service')
const logger = require('../logger')

module.exports = (req, res, next) => {
  const id = Number(req.query.id) || 0
  const delay = Number(req.query.delay) || 0
  const sessionId = req.sessionId

  const uuid = logger.debug(`doSomething.id:`, id)
  res.results.push(uuid)
  
  doSomething({ id, delay })
    .then(result => {
      res.results.push(result)
      return doSomething({ id, delay })
    })
    .then(result => {
      res.results.push(result)
      res.statusCode = 200
      res.data = { id, sessionId, results: res.results }
      next()
    })
    .catch(next)
}