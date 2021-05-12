const express = require('express');

const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function (req, res, next) {
  res.json({ message: 'respond with a resource' });
});

module.exports = userRouter;
