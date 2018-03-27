const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  id: Number,
  text: String,
  user_id: Number,
  rt_users: Array,
});

function list() {
  return Tweet.find({});
}

function getTweetsContaining(searchString) {
  return Tweet.find({ text: new RegExp(searchString, 'g') });
}

function getTweetsByUserId(userId) {
  return Tweet.find({ user_id: userId });
}

function findTweetById(tweetId) {
  return Tweet.find({ id: tweetId });
}

module.exports = {
  list,
  findTweetById,
  getTweetsContaining,
  getTweetsByUserId,

};

