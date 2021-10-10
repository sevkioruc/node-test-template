const db = require('../../database')
const Todo = db.todo

exports.findAll = async (req, res) => {
	const todos = await Todo.findAll()
	res.status(200).json(todos)
}

exports.create = async (req, res) => {
	if (!req.body.content) {
		res.status(400).send({ message: 'Content cannot be empty' })
	}

	const todo = {
		content: req.body.content
	}

	Todo.create(todo)
		.then(data => {
			res.status(201).send(data)
		}).catch(err => {
			res.status(500).send({ message: 'Some error occured while creating thr Todo' })
		})
}
