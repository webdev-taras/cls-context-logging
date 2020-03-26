const { namespase } = require('./services/cls')

const logger = {
  info: (...data) => console.log(`[${namespase.get('sessionId')}]`, ...data),
  debug: (...data) => {
    const sessionId = namespase.get('sessionId')
    console.log(`[${sessionId}]`, ...data)
    return sessionId
  },
  error: (err) => {
    console.error(`[${namespase.get('sessionId')}] ERROR`)
    console.error(err)
  },
}

module.exports = logger
