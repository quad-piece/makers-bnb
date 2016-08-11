var express = require('express');
var router = express.Router();
var userDB = require('../models/userDB')
var flash = require('connect-flash')
var bcrypt = require('bcrypt')
var clientSession = require('client-sessions')

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

router.get('/login', function(req, res, next) {
  res.render('logIn', { title: 'title' })
});

router.post('/login', function(req, res, next) {
 userDB.findOne({ email: req.body.email }, function(err, user) {
   if (!user) {
     res.render('login.pug', { error: 'Invalid email or password.' });
   } else {
     if (req.body.password === user.password) {
       // sets a cookie with the user's info
       req.session.user = user;
       res.redirect('/listings');
     } else {
       res.render('login.pug', { error: 'Invalid email or password.' });
     }
   }
 });
});

module.exports = router;
