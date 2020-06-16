
const router_users = require('express').Router();
const { users } = require('../db.js');

router_users.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send(`Такого пользователя не существует=${req.params.id}`);
    return;
  }

  const { name, age } = users[req.params.id];

  res.send(`Пользователь ${name}, ${age} лет`);
  //res.send(users);
});

module.exports = router_users;