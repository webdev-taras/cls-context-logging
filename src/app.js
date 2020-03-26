const express = require('express')

const {
  bodyParser,
  session,
  response,
  error,
} = require('./middlewares')

const {
  hello,
  echo,
  test,
} = require('./controllers')

const logger = require('./logger')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session)

app.get('/', hello)
app.post('/echo', echo)
app.get('/test', test)

app.use(response)
app.use(error)

module.exports = app
