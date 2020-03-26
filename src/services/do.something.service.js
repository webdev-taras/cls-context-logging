const logger = require('../logger')

const pause = time =>
  data =>
    new Promise(resolve => {
      timeoutId = setTimeout(resolve.bind(null, data), time)
      return data
    })

const doSomething = (params) => {
  const { id = 0, delay = 0 } = params
  result = `completed with id = ${id}`
  logger.info(`doSomething.params:`, params)
  return pause(delay)(result)
}

module.exports = doSomething
