var express = require('express');
var router = express.Router();
var listing = require('../models/listing');

router.get('/', function(req, res, next) {
  var mylistings;
  console.log(listing);
  listing.run().then(function(allListings) {
    mylistings = allListings;
  }).then(function() {
    res.render('../views/listings/index', { listings: mylistings, email: req.session.email })
  });
});

router.get('/new', function(req, res, next) {
  if (req.session.email) {
  res.render('../views/listings/new', { title: 'Listings', email: req.session.email });
  } else {
    res.redirect('/users/login')
  };
});

router.post('/', function(req, res, next) {
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
    res.render('listings/view', {title: 'Listing', showlisting: listingView, email: req.session.email});
  });
});

module.exports = router;
