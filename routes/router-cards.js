const routerCards = require('express').Router();

const { fetchCards } = require('../helpers/getData');

const url = './data/cards.json';

// routerCards.use(function timeLog(req, res, next) {
//   console.log('Вызвали рутер routerCards');
//   next();
// });

routerCards.get('/', (req, res) => {
  fetchCards(url)
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = routerCards;
