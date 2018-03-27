const mongoose = require('mongoose');
const tweetModel = require('./tweet.models.js');

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

function findTweetsByUsername(searchName) {
  return User.findOne({ username: searchName }).lean().exec()
    .then((usuario) => {
      return tweetModel.getTweetsByUserId(usuario.id);
    });
}

module.exports = {
  list,
  findUserById,
  findTweetsByUsername,
};
