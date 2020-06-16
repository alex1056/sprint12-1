const router_err = require('express').Router();

router_err.use((req, res, next) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
  next();
});

module.exports = router_err;