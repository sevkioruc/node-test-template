const config = require('./config/config.json')[process.env.NODE_ENV]

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: config.dialect,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.todo = require('./app/models/todo')(sequelize, Sequelize)

module.exports = db
