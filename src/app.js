const express = require('express')
const sessionMiddleware = require('./session.middleware')
const responseMiddleware = require('./response.middleware')
const errorMiddleware = require('./error.middleware')
// const logger = require('./logger')

const app = express()

app.use(sessionMiddleware)

app.get('/', (req, res, next) => {
  // const status = 200
  // const data = 'It works!'
  // logger.info(data)
  // res.status(status).json({ status, data })
  res.statusCode = 200
  res.data = 'It works!'
  next()
})

app.use(responseMiddleware)
app.use(errorMiddleware)

module.exports = app
