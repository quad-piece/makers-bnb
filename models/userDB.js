'use strict';

var bcrypt = require('bcrypt');

var thinky = require('thinky')({
    host: 'localhost',
    port: 28015,
    db: 'test'
});

var r = thinky.r;

var Users = thinky.createModel('people', {
    id: String,
    name: String,
    userName: String,
    email: String,
    password: String,
});

module.exports = Users;
