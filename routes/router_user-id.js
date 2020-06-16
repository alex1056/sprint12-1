const router_user_id = require('express').Router();
const { fetchUserById } = require('../helpers/getData');
const url = './data/users.json';


router_user_id.use(function timeLog(req, res, next) {
  console.log('Вызвали рутер router_users-id');
  next();
});

router_user_id.get(':id', (req, res) => {
  console.log("Внутри router_user_id");
  fetchUserById(url, req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    })
});

module.exports = router_user_id;








// router_users.get('/users/:id', (req, res) => {
//   if (!users[req.params.id]) {
//     res.send(`Такого пользователя не существует=${req.params.id}`);
//     return;
//   }

//   const { name, age } = users[req.params.id];

//   res.send(`Пользователь ${name}, ${age} лет`);
//   //res.send(users);
// });

// module.exports = router_users;