const { expect } = require('chai');
const config = require('../config');
const testData = require('../data/testData.json');

async function setupDriver(browser = 'chrome') {
  const driver = await new Builder().forBrowser(browser).build();
  await driver.manage().window().maximize();
  return driver;
}

async function navigateToDemoQAWebsite(driver) {
  await driver.get(config.baseUrl);
  const title = await driver.getTitle();
  expect(title).to.include(testData.tittleWebsite);
}

module.exports = {
  setupDriver,
  navigateToDemoQAWebsite
};
