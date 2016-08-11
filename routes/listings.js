var express = require('express');
var router = express.Router();
var listingsDB = require('../models/listing');;
var thinky = require('thinky')({
   host: 'localhost',
   port: 28015,
   db: 'test'
});

var type = thinky.type;
var r = thinky.r;


router.get('/', function(req, res, next) {
  var mylistings;
    listingsDB.run().then(function(allListings) {
    mylistings = allListings;
  }).then(function() {
    res.render('../views/listings/index', { listings: mylistings })
  });
});

router.post('/', function(req, res, next) {
  listing = new listingsDB(req.body);
  listing.save();
  res.redirect('/listings');
});

router.get('/new', function(req, res, next) {
  res.render('../views/listings/new', { title: 'Listings' });
});


router.get('/view', function(req, res, next) {
  var listingView
  listingsDB.filter({id: req.query.id}).run().then(function(thislisting){
    listingView = thislisting[0]
  }).then(function(){
    res.render('listings/view', {title: 'Listing', showlisting: listingView});
  });
});

module.exports = router;
