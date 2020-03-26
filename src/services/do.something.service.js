const logger = require('../logger')

const pause = time =>
  data =>
    new Promise(resolve => {
      timeoutId = setTimeout(resolve.bind(null, data), time)
      return data
    })

const doSomething = (params) => {
  const { id = 0, delay = 0 } = params
  return pause(delay)(id)
    .then(id => logger.debug(`doSomething.id:`, id))
}

module.exports = doSomething
