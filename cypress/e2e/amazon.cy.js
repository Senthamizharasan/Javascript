// describe('Amazon', () => {
//   it('Amazon login page validation', () => {
//     cy.visit('https://www.amazon.in/');
//         cy.get('#twotabsearchtextbox').type('iphone')
//         cy.get('#nav-search-submit-button').click()
//     cy.get('[data-index="3"]').click()
//   })
// })

describe('Flipkart', () => {
  it('Flipkart login page validation', () => {
    cy.visit('https://www.flipkart.com/');
    cy.get('input.Pke_EE').type('iphone{enter}');
    cy.wait(4000);
    cy.get('div[data-id="MOBGTAGPYYWZRUJX"]', { timeout: 10000 })
      .should('be.visible')
      .click();
    // cy.wait(2000);
    // cy.get('Nx9bqj CxhGGd').should('have.text','57,999')  
    //cy.get('input.Pke_EE').type('iphone')
    //cy.get('div[data-id="MOBGTAGPYYWZRUJX"]').click();

  })
})