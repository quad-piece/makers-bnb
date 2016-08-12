var express = require('express');
var router = express.Router();
var listing = require('../models/listing');

router.get('/', function(req, res, next) {
  var mylistings;
  listing.run().then(function(allListings) {
    mylistings = allListings;
  }).then(function() {
    res.render('../views/listings/index', { listings: mylistings, email: req.session.email})
  });
});

router.get('/new', function(req, res, next) {
  res.render('../views/listings/new', { title: 'Listings' });
});

router.post('/', function(req, res, next) {
  console.log(req.session.email);
  listing.save({
    title: req.param('title'),
    description: req.param('description'),
    location: req.param('location'),
    start_date: req.param('start-date'),
    end_date: req.param('end-date'),
    price: req.param('price')
  }).then(res.redirect('/listings'))
});

router.get('/view', function(req, res, next) {
  var listingView;
  listing.filter({id: req.query.id}).run().then(function(thislisting){
    listingView = thislisting[0]
  }).then(function(){
    res.render('listings/view', {title: 'Listing', showlisting: listingView});
  });
});

module.exports = router;
