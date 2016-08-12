var express = require('express');
var router = express.Router();
var request = require('../models/request');
var listing = require('../models/listing');

// router.get('/', function(req, res, next) {
//   var mylistings;
//   listing.run().then(function(allListings) {
//     mylistings = allListings;
//   }).then(function() {
//     res.render('../views/listings/index', { listings: mylistings })
//   });
// });

router.post('/confirm', function(req, res, next) {
  var thisListingPrice;

  listing.filter({id: req.query.id}).run().then(function(thislisting){
    listingView = thislisting[0]
    thisListingPrice = thislisting[0].price
    var cost
    var nights
    var firstDate
    var secondDate
  }).then(function(){
     oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
     firstDate = new Date(req.param('end-date'));
     secondDate = new Date(req.param('start-date'));
     nights = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
     cost = thisListingPrice * nights
    console.log(cost)
  }).then(function(){
    res.render('../views/requests/confirm', { showlisting: listingView, cost: cost, nights: nights, startDate: secondDate, endDate: firstDate, email: req.session.email});
  });
});

router.post('/submit', function(req, res, next){
  
})

// router.post('/new', function(req, res, next) {
//   listing.save({
//     title: req.param('title'),
//     description: req.param('description'),
//     location: req.param('location'),
//     start_date: req.param('start-date'),
//     end_date: req.param('end-date'),
//     price: req.param('price')
//   }).then(res.redirect('/listings'))
// });

module.exports = router;
