const mongoose = require('mongoose');

const Twit = mongoose.model('Twit', {
  text: String,
  user_id: String,
});

function list() {
  return Twit.find({});
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
  return new Twit(pck).save()
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

