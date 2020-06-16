
const router_users = require('express').Router();
const { fetchUsers } = require('../helpers/getData');
const url = './data/users.json';


router_users.use(function timeLog(req, res, next) {
  console.log('Вызвали рутер router_users');
  next();
});

router_users.get('/', (req, res) => {
  fetchUsers(url)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    })
});

module.exports = router_users;