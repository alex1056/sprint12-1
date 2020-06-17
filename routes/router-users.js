const routerUsers = require('express').Router();
const { fetchUsers } = require('../helpers/getData');

const url = './data/users.json';

// routerUsers.use(function timeLog(req, res, next) {
//   console.log('Вызвали рутер router_users');
//   next();
// });

routerUsers.get('/', (req, res) => {
  fetchUsers(url)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = routerUsers;
