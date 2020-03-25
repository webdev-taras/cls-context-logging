const { namespase } = require('./cls')

const logger = {
  info: (...data) => console.log(`[${namespase.get('sessionId')}]`, ...data),
  error: (err) => {
    console.error(`[${namespase.get('sessionId')}] ERROR`)
    console.error(err)
  },
}

module.exports = logger
