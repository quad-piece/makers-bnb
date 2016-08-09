var Browser = require("zombie");
var url = "http://localhost:3000";
var browser = new Browser();

describe('User visits signup page', function() {

  it("should visit listings page and see the listings form", function(next) {
    browser.visit(url + '/lisitngs/new', function() {
      expect(browser.success).toBe(true);
      expect(browser.query("#listings-form")).not.toBeNull();
      next();
    });
  });


  it("should be able to login with the right credentials", function(next) {
    browser.visit(url + '/listings/new', function() {
    browser
      .fill("title", "Beach House")
      .fill("description", "Beautiful Beach House")
      .fill("location", "LA")
      .fill("start-date", "01.01.16")
      .fill("end-date", "")
      .fill("price-per-night", 20)
      .pressButton('submit-listing!', done);

    expect(browser.html("body")).toContain("Listing submitted");
    });
  });
});
