/* eslint-disable import/no-dynamic-require */
const express = require('express');

const app = express();
const path = require('path');

const routerUsers = require(path.join(__dirname, 'routes/router-users.js'));
const routerCards = require(path.join(__dirname, 'routes/router-cards.js'));

const routerErr = require(path.join(__dirname, 'middlewares/router-err.js'));
const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerUsers);
app.use('/cards', routerCards);
app.use(routerErr);

app.listen(PORT, () => {
  // console.log(`App listening on port ${PORT}`);
});

// console.log('Запустили сервер');
