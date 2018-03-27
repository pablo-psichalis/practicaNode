const tweetsdb = require('./tweetsdb.js');
const usersdb = require('./usersdb.js');

const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  id: Number,
  text: String,
  user_id: Number,
  rt_users: Array,
});

const User = mongoose.model('User', {
  id: Number,
  username: String,
  name: String,
});

mongoose.connect('mongodb://localhost/test');

function inserttweet(data) {
  for (let index = 0; index < data.length; index++) {
    Tweet(data[index]).save();
  }
}

function insertusers(data) {
  for (let index = 0; index < data.length; index++) {
    User(data[index]).save();
  }
}

inserttweet(tweetsdb);
insertusers(usersdb);

