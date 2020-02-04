const URL = 'file:///Users/itsjay26/Work/upgrad/css-tests/css-display/public/index.html';

module.exports = {
  'test if the hero title is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#title').to.be.present;
  },
  'test if the hero title is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#title').to.have.css('display').which.equals('block');
  },
  'test if the hero subtitle is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#subtitle').to.be.present;
  },
  'test if the hero subtitle is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#subtitle').to.have.css('display').which.equals('block');
  },
  'test if the movie 1 is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-1').to.be.present;
  },
  'test if the movie 1 is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-1').to.have.css('display').which.equals('inline-block');
  },
  'test if the movie 2 is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-2').to.be.present;
  },
  'test if the movie 2 is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-2').to.have.css('display').which.equals('inline-block');
  },
  'test if the movie 3 is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-3').to.be.present;
  },
  'test if the movie 3 is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-3').to.have.css('display').which.equals('inline-block');
  },
  'test if the movie 4 is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-4').to.be.present;
  },
  'test if the movie 4 is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#movie-4').to.have.css('display').which.equals('inline-block');
  },
  'test if the like button is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#like-button').to.be.present;
  },
  'test if the like button is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#like-button').to.have.css('display').which.equals('inline');
  },
  'test if the share button is present': function(browser) {
    browser
      .url(URL)
      .expect.element('#share-button').to.be.present;
  },
  'test if the share button is correctly displayed': function(browser) {
    browser
      .url(URL)
      .expect.element('#share-button').to.have.css('display').which.equals('inline');
  }
}