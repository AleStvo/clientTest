const {search} = require('./search');
const {create} = require('./create');
const {update} = require('./update');
const {delete: deleteCar} = require('./delete');

module.exports = {
  search,
  create,
  update,
  deleteCar
};