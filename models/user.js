'use strict';

var thinky = require(__dirname+'/util/thinky.js');
var type = thinky.type;
var r = thinky.r;
var bcrypt = require('bcrypt');

var User = thinky.createModel('User', {
    id: type.string(),
    name: type.string(),
    userName: type.string(),
    email: type.string(),
    password: type.string()
});

module.exports = User;
