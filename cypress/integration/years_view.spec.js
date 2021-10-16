beforeEach(() => {
  cy.visit('http://localhost:3000/');
  cy.fetchYears('http://phish.in/api/v1/years');
});

describe('Landing Page (Years View)', () => {
  it('should be able to get all elements on the page', () => {
    cy.get('img')
      .should('have.attr', 'src')
      .get('a')
      .should('have.attr', 'href')
      .get('h3')
      .eq(0)
      .contains('2021')
      .get('h3')
      .eq(29)
      .contains('1983-1987');
  });

  it('should be able to click on a year and be taken to a new page', () => {
    cy.fetch2019Shows();
    cy.get('[id=2019]').click();
    cy.url().should('include', 2019);
    cy.get('.card').first().get('.venue').contains('TEST NAME 1');
    cy.get('.date').contains('Feb 28, 2019');
    cy.get('.location').contains('TEST LOCATION 1');
    cy.get('.card').last().get('.venue').contains('TEST NAME 2');
    cy.get('.date').contains('Feb 21, 2019');
    cy.get('.location').contains('TEST LOCATION 2');
  });
});
