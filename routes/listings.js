var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('/listings', { title: 'Listings' });
// });

router.get('/new', function(req, res, next) {
  res.render('../views/listings/new', { title: 'Listings' });
});

router.post('/', function(req, res, next) {
  res.redirect('/listings');
});

router.get('/', function(req, res, next) {
  res.render('../views/listings/index', { title: 'Listings' });
});

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
