const Sequelize = require('sequelize')
const db = require('../db.js')

const Image = db.define(
  'image',
  {
    url: {
      type: Sequelize.STRING,
      field: 'image_url'
    },
    title: {
      type: Sequelize.STRING,
      field: 'image_title'
    },
  }
)

module.exports = Image