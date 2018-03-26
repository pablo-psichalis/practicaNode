const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  id: String,
  text: String,
  user_id: String,
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

function search() {
  return new Promise((resolve) => {
    resolve([]);
  });
}

function create(pck) {
  return new Tweet(pck).save()
    .catch((error) => {
      if (error.code === 11000) {
        const err = new Error('duplicadisimo');
        err.status = 411;
        throw err;
      }
      throw error;
    });
}

module.exports = {
  list,
  search,
};

