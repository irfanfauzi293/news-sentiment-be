const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const route = {};

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    const instanceName = file.split('.')[0];
    route[instanceName] = model;
  });

module.exports = route;
