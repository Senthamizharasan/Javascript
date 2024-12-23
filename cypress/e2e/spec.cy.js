
describe('Login Test', () => {
  it('Validate Login and functionalities', () => {
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //radio button
   cy.get('[value="radio3"]').check().should('have.value','radio3')
   //Check box
   cy.get('label [type="checkbox"]').check(["option1","option3"])
   //Static dropdown
   cy.get('select').select('option2').should('have.value','option2')
   //Dynamic dropdown
   cy.get('input#autocomplete').type('In')
   cy.get('.ui-menu-item div').each(($countries)=>{
    if($countries.text()==='India'){
      cy.wrap($countries).click({force:true})
    }
   })
   //open tab
   cy.get('fieldset a#opentab').invoke('removeAttr','target').click()
   cy.origin('https://www.qaclickacademy.com/',()=>{
    cy.get('#navbarSupportedContent a[href*="blog"]').click()
    cy.wait(2000)
    cy.go('back')
    cy.wait(2000)
    cy.go('back')
   })
   //Alert
   cy.get('#alertbtn').click()
   cy.on('window:alert',(alerttext)=>{
    expect(alerttext).to.equal('Hello , share this practice page and share your knowledge');
    return true
   })
   cy.get('#confirmbtn').click()
   cy.on('window:confirm',(alerttext)=>{
    expect(alerttext).to.equal('Hello , Are you sure you want to confirm?');
    return false
  })
  //hide and show
  cy.get('#displayed-text').should('be.visible')
  cy.get('#hide-textbox').click()
  cy.get('#displayed-text').should('not.be.visible')
  cy.wait(4000)
  cy.get('#show-textbox').click()
  cy.get('#displayed-text').should('be.visible')

})
})