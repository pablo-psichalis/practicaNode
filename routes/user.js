const express = require('express');
const controller = require('../controllers/user.controller.js');

const router = express.Router();
const cache = [];

/* GET user listing. */
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
  controller.findUserById(req.params.id)
    .then((resul) => {
      res.json(resul);
      cache[req.url] = resul;
    })
    .catch(next);
});

module.exports = router;
