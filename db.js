const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'

const db = new Sequelize(process.env.DATABASE_URL || databaseUrl)

db.sync({ force: true })
.then(()=> console.log('database connected'))
.error(err => console.error(err))

module.exports = db