const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

merge({ files: ['cypress/reports/*.json'] })
  .then(report => generator.create(report, {
    reportDir: 'cypress/reports',
    reportFilename: 'merged-report'
  }))
  .then(() => console.log('Merged report generated successfully'))
  .catch(err => console.error(err));

module.exports = { merge }