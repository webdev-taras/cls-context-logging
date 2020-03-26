const doSomething = require('../services/do.something.service')

module.exports = (req, res, next) => {
  const id = Number(req.query.id) || 0
  const delay = Number(req.query.delay) || 0
  doSomething({ id, delay })
    .then(result => {
      res.statusCode = 200
      res.data = { id, result }
      next()
    })
    .catch(next)
}