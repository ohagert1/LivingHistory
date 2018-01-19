const db = require('../db');

const Sites = db.define('Sites', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'http://www.strangehistory.net/blog/wp-content/uploads/2015/10/nyc-1903.jpg'
  }
});

module.exports = Sites;
