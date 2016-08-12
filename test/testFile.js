const Browser = require('Zombie');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
// Browser.localhost('example.com', 3000);

describe('user visits signup page', function(){
  before(function() {
  this.browser = new Browser({ site: 'http://localhost:3000' });
});

  before(function(done){
    this.browser.visit('/users/new', done);
  });

  it('submits form', function(){
    assert.ok(this.browser.success);
    this.browser
    .fill('email', 'g@mills.com')
    .fill('password', 'georgia')
    .pressButton('Sign up')
    this.browser.wait().then( function() {
      expect(this.browser.html("body")).to.contain("Hello");
  });

  });
});
