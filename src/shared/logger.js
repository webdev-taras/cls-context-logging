const { namespase } = require('./cls')

const logger = {
  info: (...data) => console.log(`[${namespase.get('transactionId')}]`, ...data),
  debug: (...data) => {
    const transactionId = namespase.get('transactionId')
    console.log(`[${transactionId}]`, ...data)
    return transactionId
  },
  error: (err) => {
    console.error(`[${namespase.get('transactionId')}] ERROR`)
    console.error(err)
  },
}

module.exports = logger
