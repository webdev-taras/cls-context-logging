const test = require('ava')
const request = require('supertest')
const app = require('../src/app')

test.before(t => {
  const agent = request.agent(app)
  t.context = { agent, app }
})

test('GET /', async t => {
  const { agent } = t.context
  const status = 200
  const data = 'It works!'
  
	const res = await agent
		.get('/')
		.send({})
  
  t.is(res.status, status)
	t.deepEqual(res.body, { status, data })
})
