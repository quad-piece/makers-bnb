process.env.NODE_ENV = 'test';
const Browser = require('zombie');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('new listings page', function() {
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    
    this.browser.visit('/listings', done);
  });

  it('should show listings', function(){
    expect(this.browser.html("li")).toContain("House");
  });

});
