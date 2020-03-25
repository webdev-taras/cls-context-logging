const test = require('ava')
const request = require('supertest')
const app = require('../src/app')

test.before(t => {
  t.context = { app }
})

test('GET /', async t => {
  const { app } = t.context
  const status = 200
  const data = 'It works!'
  
	const res = await request(app)
		.get('/')
		.send({})
  
  t.is(res.status, status)
	t.deepEqual(res.body, { status, data })
})
