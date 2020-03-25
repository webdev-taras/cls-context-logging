const express = require('express')

const app = express()

const logger = {
  info: data => console.log(data)
}

app.get('/', (req, res) => {
  const status = 200
  const data = 'It works!'
  // logger.info(data)
  res.status(status).json({ status, data })
})

module.exports = app
