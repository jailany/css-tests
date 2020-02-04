const URL = 'file:///Users/itsjay26/Work/upgrad/css-tests/css-display/public/index.html';

module.exports = {
  'test if meta title is correct' : function (browser) {
    browser
      .url(URL) // replace the url with 
      .waitForElementVisible('body')
      .assert.titleContains('CSS Display Properties');
  },
  'test if the here text block is present': function (browser) {
    browser
      .url(URL)
      .waitForElementVisible('body')
      .expect.element('#hero-text').to.be.present;
  },
  'test if the movie column block is present': function (browser) {
    browser
      .url(URL)
      .waitForElementVisible('body')
      .expect.element('#movie-columns').to.be.present;
  },
  'test if the link area blocks is present': function (browser) {
    browser
      .url(URL)
      .waitForElementVisible('body')
      .expect.element('#link-area').to.be.present;
  }
}