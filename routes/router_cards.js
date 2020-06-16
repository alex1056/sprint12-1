
const router_cards = require('express').Router();
const { fetchCards } = require('../helpers/getData');
const url = './data/cards.json';

router_cards.use(function timeLog(req, res, next) {
  console.log('Вызвали рутер router_cards');
  next();
});

router_cards.get('/', (req, res) => {
  fetchCards(url)
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      console.log(err);
    })
});

module.exports = router_cards;