const express = require('express');
const controller = require('../controllers/tweet.controller.js');

const router = express.Router();
// const cache = [];

/* GET tweet listing. */

router.get('/', (req, res, next) => {
  controller.list()
    .then(res.json.bind(res))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  controller.findTweetById(req.params.id)
    .then(res.json.bind(res))
    .catch(next);
});

module.exports = router;
