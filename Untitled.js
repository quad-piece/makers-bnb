var express = require('express');
var router = express.Router();
var userDB = require('../src/userDB');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');
var getUsers = require('../src/getUsers');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res){
 var html = '<form action="/users" method="post">' +
            'Your name: <input type="text" name="userName"><br>' +
            '<button type="submit">Submit</button>' +
            '</form>';
 if (req.session.userName) {
   html += '<br>Your username from your session is: ' + req.session.userName;
 }
 res.send(html);
});

router.post('/', function(req, res){
 req.session.userName = req.body.userName;
 res.redirect('/users');
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
     password: bcrypt.hashSync(req.param('password')[0], (8))
     });
     res.redirect('/users');
   }
});

 router.get('/logIn', function(req, res, next){
   res.render('logIn', {title: 'title'})
 });

 router.post('/logIn', function(req, res, next){
   getUsers.filter({email: req.param('email')}).run().then(function(result){
     var nonHashedPassword = req.param('password');
     var hashedPassword = result[0].password;
     if (bcrypt.compareSync(nonHashedPassword, hashedPassword)) {
       console.log('great success');
       req.session.email = req.param('email');
       res.redirect('/users/dashboard')
     }
     else {
       console.log('sad failure :(');
       res.redirect('/users/logIn');
     }
   });

   router.get('/dashboard', function(req, res, next){
     res.render('dashboard', { email: req.session.email} )
   });

 });




module.exports = router;
