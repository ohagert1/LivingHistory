const db = require('../db');
const Sequelize = require('sequelize');

const Photos = db.define('Photos', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'http://www.strangehistory.net/blog/wp-content/uploads/2015/10/nyc-1903.jpg'
  }
});

module.exports = Photos;
