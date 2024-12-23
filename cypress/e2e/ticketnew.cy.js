describe('Ticketnew.com testing', () => {
  it('Ticket booking', () => {
    cy.visit('https://ticketnew.com/')
    cy.get('a[href="/movies/chennai"]').eq(0).click()
    cy.url().should('contain','chennai')
    cy.wait(2000);
    cy.get(':nth-child(1) > .H5RunningMovieV2_runningMovie__3_RWh > a > .H5RunningMovieV2_imgWrapper__inAMo > .bgImg').click()
    cy.title().should('include','Viduthalai Part - 2')
    cy.get(':nth-child(2) > .MovieSessionsListing_col2__2vcaY > :nth-child(2) > .greenCol').click()
    cy.contains('button', 'Proceed',{ timeout: 10000 }).click();
    cy.on('window:alert',(alerttext)=>{
      expect(alerttext).to.equal('This movie has been rated ‘A’ and is for audiences above the age of 18. Please carry a valid photo ID/ age proof to the theatre. Refund will not be issued if entry is denied due to age requirements not being met.');
    return true
    })
    cy.contains('div', 'EI',{ timeout: 50000 }).should('include.text','EI').then(()=>{
      cy.get(':nth-child(1) > .FixedSeating_rightRow__MQXfw > ul > :nth-child(10) > .FixedSeating_seatL___joUf > :nth-child(10) > .available')
      .click();
      cy.get('button', { timeout: 20000 }).click()
    })
    

  })
})