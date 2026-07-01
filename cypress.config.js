const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: 'http://jupiter.cloud.planittesting.com',
     pageLoadTimeout: 60000,  
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
