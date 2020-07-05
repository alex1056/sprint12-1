const routerUsers = require('express').Router();

const { fetchUsers, fetchUserById } = require('../helpers/getData');

const url = './data/users.json';

// routerUsers.use(function timeLog(req, res, next) {
//   console.log('Вызвали рутер router_users');
//   next();
// });
routerUsers.get('/users/:id', (req, res) => {
  fetchUserById(url, req.params.id)
    .then((user) => {
      const { message } = user;
      if (message) {
        res.status(404).send(user);
        // console.log(message);
        return;
      }
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
    });
});

routerUsers.get('/users', (req, res) => {
  fetchUsers(url)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = routerUsers;
