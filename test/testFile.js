


const Browser = require('Zombie');
var assert = require('assert');

// Browser.localhost('example.com', 3000);

describe('user visits signup page', function(){
  before(function() {
  this.browser = new Browser({ site: 'http://localhost:3000' });
});

  before(function(done){
    this.browser.visit('/users/new', done);
  });

    describe('submits form', function(){
    before(function(done) {
    this.browser
    .fill('email', 'g@mills.com')
    .fill('password', 'georgia')
    .pressButton('Sign up', done)
  });

  it('should be successful', function() {
      this.browser.assert.success();
    });

    it('should see welcome page', function() {
      this.browser.text('HELO');
    });
  });
});
