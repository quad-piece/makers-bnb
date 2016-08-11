'use strict';

var thinky = require(__dirname+'/util/thinky.js');
var type = thinky.type;
var r = thinky.r;

// Create a model - the table is automatically created
var Listing = thinky.createModel('Listing', {
    id: type.string(),
    title: type.string(),
    description: type.string(),
    location: type.string(),
    start_date: type.date(),
    end_date: type.date(),
    price: type.number(),
    userId: type.string()
});

Listing.defineStatic('getTitle', function() {
  return this.without
})

module.exports = Listing;

var User = require(__dirname+'/user.js');
Listing.belongsTo(User, "user", "userId", "id");
