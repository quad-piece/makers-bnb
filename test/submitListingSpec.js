process.env.NODE_ENV = 'test';
var Browser = require('zombie');

describe('new listings page', function() {
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/listings/new', done);
  });

  it('should show contact a form', function(){
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('form label'), 'Title');
  });
  // it('should refuse empty submissions');
  // ...

  after(function(done) {
    this.server.close(done);
  });
});
