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
    this.browser.visit('/listings/new', done);
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

  it('should submit the form', function(){
    this.browser
    .fill("title", "Beach House")
    .fill("description", "Beautiful Beach House")
    .fill("location", "LA")
    .fill("start-date", "2016-08-16")
    .fill("end-date", "2016-08-26")
    .fill("price", 20)
    this.browser.pressButton('Submit Listing!');
    this.browser.wait().then( function() {
      expect(this.browser.html("h1")).toContain("Listing form submitted");
    });
  });

  it('should show listings', function(){

    });



});
