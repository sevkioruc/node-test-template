const express = require('express')
const config = require('./config/config.json')[process.env.NODE_ENV]

const app = express()

require('dotenv').config({ path: `${__dirname}/.env` })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database
const db = require('./database')
db.sequelize.sync()

// Routes
require('./app/routes/todo.route')(app)

const PORT = config.port || 5000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

module.exports = app
