
const router_cards = require('express').Router();
const { cards } = require('../db.js');

router_cards.use(function timeLog(req, res, next) {
  console.log('Вызвали рутер router_cards');
  next();
});

router_cards.get('/', (req, res) => {
  res.send(cards);
});

module.exports = router_cards;