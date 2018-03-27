const userModel = require('../models/user.models.js');

function list() {
  return userModel.list();
}

function findUserById(userId) {
  return userModel.findUserById(userId);
}

module.exports = {
  list,
  findUserById,
};
