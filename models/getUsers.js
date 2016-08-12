'use strict';

var bcrypt = require('bcrypt');

var thinky = require('thinky')({
   host: 'localhost',
   port: 28015,
   db: 'test'
});

var r = thinky.r;
var getUsers = r.table('User')

module.exports = getUsers;
