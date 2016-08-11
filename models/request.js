'use strict';

var thinky = require(__dirname+'/util/thinky.js');
var type = thinky.type;
var r = thinky.r;

// Create a model - the table is automatically created
var Request = thinky.createModel("Request", {
    id: type.string(),
    start_date: type.date(),
    end_date: type.date(),
    price: type.number(),
    listingId: type.string(),
    userId: type.string()
});

module.exports = Request;

var Listing = require(__dirname+'/listing.js');
Request.belongsTo(Listing, "listing", "listingId", "id");
var User = require(__dirname+'/user.js');
Request.belongsTo(User, "user", "userId", "id");
