const tweetModel = require('../models/tweet.models.js');

function list() {
  return tweetModel.list();
}

function findTweetById(tweetId) {
  return tweetModel.findTweetById(tweetId);
}

function getTweetsContaining(searchString) {
  return tweetModel.getTweetsContaining(searchString);
}

function getTweetsByUserId(userid) {
  return tweetModel.getTweetsByUserId(userid);
}

module.exports = {
  list,
  findTweetById,
  getTweetsContaining,
};
