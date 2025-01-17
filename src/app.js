const express = require('express')

const {
  urlencodedParser,
  jsonParser,
  transaction,
  winston,
  morgan,
  response,
  error,
} = require('./middlewares')

const {
  hello,
  echo,
  test,
} = require('./controllers')

const app = express()

app.use(urlencodedParser)
app.use(jsonParser)

app.use(transaction)
app.use(winston)
app.use(morgan)

app.get('/', hello)
app.post('/echo', echo)
app.get('/test', test)

app.use(response)
app.use(error)

module.exports = app
