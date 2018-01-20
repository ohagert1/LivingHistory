const Sequelize = require('sequelize');
const db = require('../db');

const Sites = db.define('Sites', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  latitude: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  longitude: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
}, {
  scopes: {
    populated: () => ({
      include: {
        all: true
      }
    })
  }
}
);

module.exports = Sites;

