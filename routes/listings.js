var express = require('express');
var router = express.Router();
var listingsDB = require('../models/listing');

router.get('/new', function(req, res, next) {
  res.render('../views/listings/new', { title: 'Listings' });
});

router.post('/', function(req, res, next) {
  listing = new listingsDB(req.body);
  listing.save();
  res.redirect('/listings');
});

router.get('/', function(req, res, next) {
  res.render('../views/listings/index');
  var allListings = listingDB.run()
});

module.exports = router;
