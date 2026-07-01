class ContactPage {

  get forename() { return cy.get('#forename'); }
  get email() { return cy.get('#email'); }
  get message() { return cy.get('#message'); }
  get submitBtn() { return cy.contains('a', 'Submit'); }

  get forenameError() { return cy.get('#forename-err'); }
  get emailError() { return cy.get('#email-err'); }
  get messageError() { return cy.get('#message-err'); }

  get successMsg() { return cy.get('.alert-success'); }

  fillMandatoryFields(data) {
    this.forename.type(data.forename);
    this.email.type(data.email);
    this.message.type(data.message);
  }

  submit() {
    this.submitBtn.click();
  }

  verifyErrorMessages() {
    this.forenameError.should('contain', 'Forename is required');
    this.emailError.should('contain', 'Email is required');
    this.messageError.should('contain', 'Message is required');
  }

  verifyErrorsVisible() {
    this.forenameError.should('be.visible');
    this.emailError.should('be.visible');
    this.messageError.should('be.visible');
  }

  verifyErrorsGone() {
    this.forenameError.should('not.exist');
    this.emailError.should('not.exist');
    this.messageError.should('not.exist');
  }

  verifySuccessMessage() {
  cy.get('.alert-success', { timeout: 50000 })
    .should('be.visible')
    .and('contain', 'Thanks');
}
}

export default ContactPage;