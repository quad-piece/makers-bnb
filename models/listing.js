var thinky = require('thinky')({
   host: 'localhost',
   port: 28015,
   db: 'test'
});
var type = thinky.type;
var r = thinky.r;

// Create a model - the table is automatically created
var Listing = thinky.createModel("Listing", {
    id: type.string(),
    title: type.string(),
    description: type.string(),
    location: type.string(),
    start_date: type.date(),
    end_date: type.date(),
    price: type.number(),
});

var getListings = function() {

};

// Join the modelss
// Listing.belongsTo(Author, "author", "idAuthor", "id");

module.exports = Listing;
