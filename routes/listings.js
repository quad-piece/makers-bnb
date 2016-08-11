var express = require('express');
var router = express.Router();
var listing = require('../models/listing');

router.get('/', function(req, res, next) {
  var mylistings;
  console.log(listing);
  listing.run().then(function(allListings) {
    mylistings = allListings;
  }).then(function() {
    res.render('../views/listings/index', { listings: mylistings })
  });
});

router.get('/new', function(req, res, next) {
  res.render('../views/listings/new', { title: 'Listings' });
});

router.post('/new', function(req, res, next) {
  listing.save({
    title: req.param('title'),
    description: req.param('description'),
    location: req.param('location'),
    start_date: req.param('start-date'),
    end_date: req.param('end-date'),
    price: req.param('price')
  }).then(res.redirect('/listings'))
});

module.exports = router;
