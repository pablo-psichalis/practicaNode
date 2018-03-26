const mongoose = require('mongoose');

const Twit = mongoose.model('Twit', {
  text: String,
  user_id: String,
});

function list() {
  return Twit.find({});
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
};

