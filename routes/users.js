var express = require('express');
var router = express.Router();
var clientSession = require('client-sessions');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');
var user = require('../models/user');
var getUsers = require('../models/getUsers');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('userNew', { title: 'title', email: req.session.email })
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
      password: bcrypt.hashSync(req.param('password')[0], (8))
    });
    res.redirect('/users');
  }
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'title', email: req.session.email  })
});

router.post('/login', function(req, res, next){
  getUsers.filter({email: req.param('email')}).run().then(function(result){
    var nonHashedPassword = req.param('password');
     var hashedPassword = result[0].password;
     if (bcrypt.compareSync(nonHashedPassword, hashedPassword)) {
       console.log('great success');
       req.session.email = req.param('email');
       req.session.userID = result[0].id;
       res.redirect('/users/dashboard');
     }
     else {
       console.log('sad failure :(');
       res.redirect('/users/login');
     }
  });
});

router.get('/areyousure', function(req, res, next){
  res.redirect('/users/sessions');
});

router.get('/dashboard', function(req, res, next){
  res.render('dashboard', { email: req.session.email} );
});

router.get('/sessions', function(req, res, next){
  delete req.session.email;
  res.redirect('/users/dashboard');
});

module.exports = router;
