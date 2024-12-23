describe('iframe', () => {
  it('Validate Login and functionalities', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //mouse over
    cy.get('#mousehover').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url().should('contain','top')
    cy.title().should('eq','Practice Page')

    //iframe
    cy.frameLoaded('iframe')
    cy.iframe().find('.main-menu ul li a[href="mentorship"]').eq(0).click()
    cy.wait(4000)
    cy.iframe().find('span.h-7').eq(1).click()


  })
})