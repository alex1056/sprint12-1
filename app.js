/* eslint-disable import/no-dynamic-require */
const express = require('express');

const app = express();
const path = require('path');

const routerUsers = require(path.join(__dirname, 'routes/router-users.js'));
const routerCards = require(path.join(__dirname, 'routes/router-cards.js'));
const routerUserId = require(path.join(__dirname, 'routes/router-user-id.js'));

const routerErr = require(path.join(__dirname, 'routes/router-err.js'));
const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerUserId);
app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use(routerErr);

app.listen(PORT, () => {
  // console.log(`App listening on port ${PORT}`);
});

// console.log('Запустили сервер');
