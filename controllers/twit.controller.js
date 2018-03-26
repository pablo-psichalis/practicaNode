const twitModel = require('../models/twit.models.js');

function list() {
  return twitModel.list();
}

function search() {
  return twitModel.search();
}

function get(name) {
  const n = name.split('-').join(' ');
  return twitModel.get(n);
}

function insert(element) {
  return twitModel.insert(element);
}

module.exports = {
  list,
  get,
  insert,
  search,
};
