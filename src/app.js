const express = require('express')
const sessionMiddleware = require('./session.middleware')
const logger = require('./logger')

const app = express()

app.use(sessionMiddleware)

app.get('/', (req, res) => {
  const status = 200
  const data = 'It works!'
  logger.info(data)
  res.status(status).json({ status, data })
})

module.exports = app
