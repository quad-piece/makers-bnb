var express = require('express');
var router = express.Router();
var userDB = require('../src/userDB');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('userNew', { title: 'title' })
});

router.post('/new', function(req, res, next) {
  console.log(req.param('password'));
  if (req.param('password')[0] !== req.param('password')[1]) {
    req.flash('error', 'Passwords do not match');
    res.redirect('/users/new');
    return;
  }
  else {
  userDB.save({
  name: req.param('name'),
  userName: req.param('userName'),
  email: req.param('email'),
  password: bcrypt.hashSync(req.param('password')[0], bcrypt.genSaltSync(8))
});
  res.redirect('/users');


}
});

module.exports = router;
