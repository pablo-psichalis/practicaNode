const userModel = require('../models/user.models.js');

function list() {
  return userModel.list();
}

function findUserById(userId) {
  return userModel.findUserById(userId);
}

function findTweetsByUsername(username) {
  return userModel.findTweetsByUsername(username);
}

module.exports = {
  list,
  findUserById,
  findTweetsByUsername,
};
