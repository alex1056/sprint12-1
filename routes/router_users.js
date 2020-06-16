
const router_users = require('express').Router();
const { users } = require('../db.js');

router_users.use(function timeLog(req, res, next) {
  console.log('Вызвали рутер router_users');
  next();
});

router_users.get('/', (req, res) => {
  res.send(users);
});

module.exports = router_users;