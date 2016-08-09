var express = require('express');
var router = express.Router();
var userDB = require('../src/userDB')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('userNew', { title: 'title' })
});

router.post('/new/pageholder', function(req, res, next) {
  user = new userDB(req.body);
  user.save();
  res.send('HELO')
});

module.exports = router;
