module.exports = app => {
	const todo = require('../controllers/todo.controller')

	const router = require('express').Router()

	router.post('/', todo.create)

	router.get('/', todo.findAll)

	app.use('/v1/todo', router)
}
