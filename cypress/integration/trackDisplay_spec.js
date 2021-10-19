describe('Track Display', () => {
  it('A user should be able to see a show/s info and individual tracks displayed by set', () => {
    cy.fetchShow()
      .visit('/shows/4')
      .url()
      .should('include', 'shows/4')
      .get('.show-info')
      .contains('Feb 21, 2019');
    cy.contains('TEST NAME 4');
    cy.contains('TEST LOCATION 4');
    cy.get('.song-title').eq(0).contains('Glide');
    cy.get('.set-2').contains('Free');
  });

  it('A user should be able to select a drop down year to see new show data displayed', () => {
    cy.fetch2020Shows();
    cy.visit('/shows/4');
    cy.get('select').select('2020');
    cy.url().should('include', 2020);
    cy.get('.card').first().get('.date').contains('Mar 15, 2020');
    cy.get('.location').contains('TEST LOCATION 1 FOR 2020');
    cy.get('.card').last().get('.venue').contains('TEST NAME 1 FOR 2020');
  });
  it('A user should be able to click on a track and hear music playing in the player', () => {
    cy.fetchShow()
      .visit('/shows/4')
      .url()
      .should('include', 'shows/4')
      .get('.show-info')
      .contains('Feb 21, 2019');
    cy.contains('TEST NAME 4');
    cy.contains('TEST LOCATION 4');
    cy.get('.song-title').eq(0).contains('Glide').click();
  });
});
