const { namespase } = require('./cls')

const logger = {
  info: data => console.log(`[${namespase.get('sessionId')}] ${data}`)
}

module.exports = logger
