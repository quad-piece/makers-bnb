var express = require('express');
var router = express.Router();
var listingsDB = require('../models/listing')

// router.get('/', function(req, res, next) {
//   res.render('/listings', { title: 'Listings' });
// });

router.get('/new', function(req, res, next) {
  res.render('../views/listings/new', { title: 'Listings' });
});

router.post('/', function(req, res, next) {
  listing = new listingsDB(req.body);
  listing.save();
   res.redirect('/listings');
});

router.get('/', function(req, res, next) {
  res.render('../views/listings/index', { title: 'Listings' });
});

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
