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
		.query({})
  
  t.is(res.status, 200)
	t.truthy(res.body.data)
})

test('POST /echo', async t => {
  const { agent } = t.context
  const message = 'hello'
  
	const res = await agent
		.post('/echo')
		.send({ message })
  
  t.is(res.status, 200)
	t.is(res.body.data, message)
})

test('GET /test', async t => {
  const { agent } = t.context

  const id = 1
  const delay = 100
  
	const res = await agent
		.get('/test', )
		.query({ id, delay })
  
  const data = res.body.data
  t.is(res.status, 200)
  t.is(data.id, id)
  t.truthy(data.sessionId)
	t.true(Array.isArray(data.results))
})

test('GET /test returns sessionId for all results', async t => {
  const { agent } = t.context

  const id = 1
  const delay = 100
  
	const res = await agent
		.get('/test', )
		.query({ id, delay })
  
  const data = res.body.data
	t.true(data.results.every(result => result === data.sessionId))
})

test('GET /something and receive the error', async t => {
  const { agent } = t.context
  
	const res = await agent
		.get('/something')
		.send({})
  
  t.is(res.status, 404)
  t.is(res.body.status, 404)
  t.truthy(res.body.error)
  t.falsy(res.body.data)
})
