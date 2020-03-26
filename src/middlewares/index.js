const urlencodedParser = require('./urlencoded-parser.middleware')
const jsonParser = require('./json-parser.middleware')
const session = require('./session.middleware')
const response = require('./response.middleware')
const error = require('./error.middleware')

module.exports = {
  urlencodedParser,
  jsonParser,
  session,
  response,
  error,
}