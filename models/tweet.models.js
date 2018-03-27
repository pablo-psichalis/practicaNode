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

/* function search(search) {
  //TODO búsqueda en mongo
  return new Promise((resolve) => {
    resolve([
      { text: 'Hola', user_id: 'mrTuitero' },
    ]);
  });
}
 */

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


/* function create(pck) {
  return new Tweet(pck).save()
    .catch((error) => {
      if (error.code === 11000) {
        const err = new Error('duplicadisimo');
        err.status = 411;
        throw err;
      }
      throw error;
    });
} */

module.exports = {
  list,
  findTweetById,
};

