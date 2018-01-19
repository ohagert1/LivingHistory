const Sites = require('./Sites');
const Photos = require('./Photos');
const Sequelize = require('sequelize');


Sites.hasMany(Photos);
Photos.belongsTo(Sites);

module.exports = {
  Sites,
  Photos
}
