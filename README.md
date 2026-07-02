# Cypress Automation Project

This project contains Cypress end-to-end tests for the Jupiter Toys demo site.

## Prerequisites

- Node.js and npm installed
- Dependencies installed with:

npm install

## Running tests
### Open the Cypress Test Runner
npm run cypress:open

### Run tests headlessly
npm run cypress:run

## Generating reports
The suite uses Mochawesome for HTML/JSON reporting.

### Merge reports
npm run merge:reports

### Generate HTML report
npm run report:html
Reports are written to the `cypress/reports` folder.
