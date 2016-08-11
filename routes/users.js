var express = require('express');
var router = express.Router();
var clientSession = require('client-sessions')
var bcrypt = require('bcrypt');
var flash = require('connect-flash');
var user = require('../models/user')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('userNew', { title: 'title' })
});

router.post('/new', function(req, res, next) {
  if (req.param('password')[0] !== req.param('password')[1]) {
    req.flash('error', 'Passwords do not match');
    res.redirect('/users/new');
    return
  } else {
    user.save({
      name: req.param('name'),
      userName: req.param('userName'),
      email: req.param('email'),
      password: bcrypt.hashSync(req.param('password')[0], bcrypt.genSaltSync(8))
    });
    res.redirect('/users');
  }
});

router.get('/login', function(req, res, next) {
  res.render('logIn', { title: 'title' })
});

module.exports = router;
