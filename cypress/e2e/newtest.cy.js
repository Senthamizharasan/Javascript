describe('Flipkart', () => {
  it('Flipkart login page validation', () => {
    cy.visit('https://www.flipkart.com/');
    cy.get('input.Pke_EE').type('laptop{enter}');
    cy.wait(4000);
    cy.get('div[data-id="DByuf4 IZexXJ jLEJ7H"]', { timeout: 10000 })
      .should('be.visible')
      .click();
    })
  })    