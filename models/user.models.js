const mongoose = require('mongoose');

const User = mongoose.model('User', {
  id: Number,
  username: String,
  name: String,
});

function list() {
  return User.find({});
}

function findUserById(userId) {
  return User.find({ id: userId });
}

module.exports = {
  list,
  findUserById,
};
