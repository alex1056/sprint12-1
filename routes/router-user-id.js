const routerUserId = require('express').Router();
const { fetchUserById } = require('../helpers/getData');

const url = './data/users.json';

// router_user_id.use((req, res, next) => {
//   console.log('Вызвали рутер router_users-id');
//   console.log('req=', req);
//   next();
// });

routerUserId.get('/users/:id', (req, res) => {
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
      console.log(err);
    });
});

module.exports = routerUserId;
