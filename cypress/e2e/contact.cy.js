import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

describe('Contact Page Tests', () => {

  const home = new HomePage();
  const contact = new ContactPage();

  const data = require('../fixtures/contact.json');

  it('Test Case 1 - Mandatory field validations', () => {

    cy.visit('/');

    home.openContactPage();

    contact.submit();
    contact.verifyErrorMessages();
    contact.verifyErrorsVisible();

    contact.fillMandatoryFields(data);
    contact.verifyErrorsGone();
  });

  // Test Case 2 - run 5 times
  for (let i = 1; i <= 5; i++) {

    it(`Test Case 2 - Successful submission run ${i}`, () => {

      cy.visit('/');

      home.openContactPage();

      contact.fillMandatoryFields(data);
      contact.submit();

      contact.verifySuccessMessage();
    });
  }

});