const logger = require('../logger')

const pause = time =>
  data =>
    new Promise(resolve => {
      timeoutId = setTimeout(resolve.bind(null, data), time)
      return data
    })

const doSomething = (params) => {
  const { id = 0, delay = 0 } = params
  const result = logger.debug(`doSomething.id:`, id)
  return pause(delay)(result)
}

module.exports = doSomething
