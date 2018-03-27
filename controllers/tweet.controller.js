const tweetModel = require('../models/tweet.models.js');

function list() {
  return tweetModel.list();
}

function findTweetById(tweetId) {
  return tweetModel.findTweetById(tweetId);
}

/*
function get(name) {
  const n = name.split('-').join(' ');
  return tweetModel.get(n);
}

function insert(element) {
  return tweetModel.insert(element);
} */

module.exports = {
  list,
  findTweetById,
};
