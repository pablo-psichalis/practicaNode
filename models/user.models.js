const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: String,
  twit_id: String,
});

function list() {
  return User.find({});
}

function create(pck) {
  return new User(pck).save()
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
