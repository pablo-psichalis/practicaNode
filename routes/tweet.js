const express = require('express');
const controller = require('../controllers/tweet.controller.js');

const router = express.Router();
const cache = [];

// verificar si está en la caché
router
  .get('/', (req, res, next) => {
    console.log('router>cache>', req.url);
    if (cache[req.url]) {
      return res.json(cache[req.url]);
    }
    next();
  });

router.get('/', (req, res, next) => {
  controller.list()
    .then((resul) => {
      res.json(resul);
      cache[req.url] = resul;
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  controller.findTweetById(req.params.id)
    .then((resul) => {
      res.json(resul);
      cache[req.url] = resul;
    })
    .catch(next);
});

router.get('/search/:text', (req, res, next) => {
  controller.getTweetsContaining(req.params.text)
    .then((resul) => {
      console.log(resul, req.params.text);
      res.json(resul);
    })
    .catch(next);
});

module.exports = router;
