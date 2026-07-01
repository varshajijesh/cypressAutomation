const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://jupiter.cloud.planittesting.com',
     pageLoadTimeout: 60000,  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
