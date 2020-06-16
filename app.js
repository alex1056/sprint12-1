
const express = require('express');
const app = express();
const path = require('path');
//const router_users = require('./routes/router_users.js');
const router_users = require(path.join(__dirname, 'routes/router_users.js'));
const router_cards = require(path.join(__dirname, 'routes/router_cards.js'));
const router_user_id = require(path.join(__dirname, 'routes/router_user-id.js'));
const router_err = require(path.join(__dirname, 'routes/router_err.js'));
const { PORT = 3000 } = process.env;


app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', router_users);
app.use('/users/:id', router_user_id);
app.use('/cards', router_cards);
app.use(router_err);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})



console.log("Запустили сервер");