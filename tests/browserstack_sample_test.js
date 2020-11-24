const webdriver = require('selenium-webdriver');

// Input capabilities
const capabilities = {
  device: 'iPhone 11',
  realMobile: 'true',
  os_version: '14.0',
  browserName: 'iPhone',
  name: 'BStack-[NodeJS] Sample Test', // test name
  build: 'BStack Build Number 1', // CI/CD job or build name
  'browserstack.user': 'chrishdunne2',
  'browserstack.key': 'ogpq6eRvhtio7QLpWsCs',
};

const driver = new webdriver.Builder()
  .usingServer('https://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();
driver.get('https://www.google.com').then(function () {
  driver
    .findElement(webdriver.By.name('q'))
    .sendKeys('BrowserStack')
    .then(function () {
      driver.getTitle().then(function (title) {
        driver.quit();
      });
    });
});
