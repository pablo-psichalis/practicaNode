const express = require('express');
const controller = require('../controllers/user.controller.js');

const router = express.Router();
const cache = [];

/* GET user listing. */
router
  .get('/', (req, res, next) => {
    console.log('router>cache>', req.url);
    if (cache[req.url]) {
      return res.json(cache[req.url]);
    }
    next();
  });

router
  .get('/', (req, res, next) => {
    controller.list()
      .then((result) => {
        res.json(result);
        cache[req.url] = result;
      })
      .catch(next);
  }).post('/', (req, res, next) => {
    controller.insert(req.body)
      .then(res.json.bind(res))
      .catch(next);
  });
router
  .get('/:name', (req, res, next) => {
    controller.get(req.params.name)
      .then(res.json.bind(res))
      .catch(next);
  });

module.exports = router;
