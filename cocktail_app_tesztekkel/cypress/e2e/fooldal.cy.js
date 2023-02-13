describe('Főoldal teszt', () => {

  
  it('Főoldal betöltés', () => {
    cy.visit('http://localhost:5173')
    cy.get('.py-5').should('have.text','Koktél kereső')
    cy.get('.hero-content > div:nth-child(2) > h1:nth-child(1)').should('have.text','Cocktail Kereső')
    cy.get('.navbar').should('contains.text','Főoldal')
    cy.get('.btn').should('have.text','Főoldal')
  })
})