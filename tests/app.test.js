const test = require('ava')
const request = require('supertest')
const app = require('../src/app')

test.before(t => {
  const agent = request.agent(app)
  t.context = { agent, app }
})

test('GET /', async t => {
  const { agent } = t.context
  
	const res = await agent
		.get('/')
		.send({})
  
  t.is(res.status, 200)
	t.truthy(res.body.data)
})

test('GET /something', async t => {
  const { agent } = t.context
  
	const res = await agent
		.get('/something')
		.send({})
  
  t.is(res.status, 404)
  t.is(res.body.status, 404)
  t.truthy(res.body.error)
  t.falsy(res.body.data)
})
