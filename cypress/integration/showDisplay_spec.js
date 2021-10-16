describe('Show Display User Flows', () => {
  it('A user should be able to see shows loaded on the page', () => {
    cy.fetch2019Shows();
    cy.visit('years/2019');
    cy.url().should('include', 2019);
    cy.get('.card').first().get('.venue').contains('TEST NAME 1');
    cy.get('.date').contains('Feb 28, 2019');
    cy.get('.location').contains('TEST LOCATION 1');
    cy.get('.card').last().get('.venue').contains('TEST NAME 2');
    cy.get('.date').contains('Feb 21, 2019');
    cy.get('.location').contains('TEST LOCATION 2');
  });

  it('A user should be able to click on a card and be taken to a new page', () => {
    cy.fetchShowData();
    cy.get('.card').first().click();
    cy.url().should('include', '/shows/1');
    cy.fetch2019Shows();
    cy.visit('years/2019');
    cy.get('.card').last().click();
    cy.url().should('include', '/shows/2');
    cy.get('.show-info');
    cy.contains('Feb 21, 2019');
    cy.contains('TEST LOCATION 2');
    cy.contains('TEST NAME 2');
  });

  it('A user should be able to select a drop down year to see new show data displayed', () => {
    cy.fetch2020Shows();
    cy.visit('years/2019');
    cy.get('select').select('2020');
    cy.url().should('include', 2020);
    cy.get('.card').first().get('.date').contains('Mar 15, 2020');
    cy.get('.location').contains('TEST LOCATION 1 FOR 2020');
    cy.get('.card').last().get('.venue').contains('TEST NAME 1 FOR 2020');
  });

  it('A user should be able to click the Default Theme button and see party mode styling', () => {
    // cy.visit('years/2019')
    // CHANGE THIS AFTER PULLING NINA'S CHANGES ...
    // cy.visit('years/2019')
    // cy.contains('Party Mode').click()
    // cy.contains('Default Mode').click()
    // cy.contains('Party Mode')
  });
});
