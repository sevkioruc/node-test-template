const app = require('../server')

const db = require('../database')

const supertest = require('supertest')
const request = supertest(app)

describe('Todo', () => {
	beforeEach(async () => {
		await db.todo.destroy({ truncate: true })
	})

	afterAll(done => {
		db.sequelize.close()
		done()
	})

	it('todo list are taken', async () => {
		const response = await request.get('/v1/todo')

		expect(response.status).toBe(200)
	})

	it('todo can be created', async () => {
		const response = await request
			.post('/v1/todo')
			.send({ content: 'Dummy Content' })

		expect(response.body.content).toBe('Dummy Content')
	})

	it('todo count increases when it was created', async () => {
		await request
			.post('/v1/todo')
			.send({ content: 'Dummy Content' })

		const response = await request.get('/v1/todo')

		expect(response.body.length).toBe(1)
	})
})
