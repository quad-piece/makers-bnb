var express = require('express');
var router = express.Router();
var request = require('../models/request');
var listing = require('../models/listing');

router.get('/', function(req, res, next) {
  var requestView;
  listing.filter({id: req.query.id}).run().then(function(thislisting){
    listingView = thislisting[0]
  }).then(function(){
    res.render('listings/view', {title: 'Listing', showlisting: listingView});
  });
});

router.get('/new', function(req, res, next) {
  res.render('../views/requests/new', { title: 'Requests' });
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
