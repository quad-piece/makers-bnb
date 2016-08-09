process.env.NODE_ENV = 'test';
var Browser = require('zombie');
var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('new listings page', function() {
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/listings', done);
  });

  it('should show contact a form', function(){
    assert.ok(this.browser.success);
    this.browser.assert.element('.title-input');
    this.browser.assert.element('.description-input');
    this.browser.assert.element('.location-input');
    this.browser.assert.element('.start-date-input');
    this.browser.assert.element('.end-date-input');
    this.browser.assert.element('.price-input');

  });


});
