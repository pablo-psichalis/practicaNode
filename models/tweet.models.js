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

function findTweetById(tweetId) {
  return Tweet.find({ id: tweetId });
}

/* const LIMIT = 30;
 */
/* function searchTweets(userId) {
  const query = {};
  if (userId) {
    query.$user_id = {
      $user_id: userId,
    };
  }

  return Tweet.find(query).limit(LIMIT);
} */

module.exports = {
  list,
  findTweetById,
  getTweetsContaining,
};

