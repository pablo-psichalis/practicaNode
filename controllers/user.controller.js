const userModel = require('../models/user.models.js');

function list() {
  return userModel.list();
}

function get(name) {
  const n = name.split('-').join(' ');
  return userModel.get(n);
}

function insert(element) {
  return userModel.insert(element);
}

module.exports = {
  list,
  get,
  insert,
};
