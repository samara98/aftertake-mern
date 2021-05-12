const express = require('express');

const userRouter = require('./routes/user');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/users', userRouter);

module.exports = router;
