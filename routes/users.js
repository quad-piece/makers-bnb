var express = require('express');
var router = express.Router();
var userDB = require('../models/userDB')
var flash = require('connect-flash')
var bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('userNew', { title: 'title' })
});

router.post('/new', function(req, res, next) {
  if (req.param('password')[0] !== req.param('password')[1]) {
    reg.flash('error', 'Passwords do not match');
    res.redirect('/users/new');
    return;
  } else {
    userDB.save({
      name: req.param('name'),
      username: req.param('username'),
      email: req.param('email'),
      password: bcrypt.hashSync(req.param('password')[0], bcrypt.genSaltSync(8))

    });
    res.redirect('/users');
  }
});

router.get('/pageholder', function(req, res, next) {
  res.send('This is where you will Log in')
});

module.exports = router;
