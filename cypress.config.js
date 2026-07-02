const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'http://jupiter.cloud.planittesting.com',
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
