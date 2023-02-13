describe('Navigációs teszt', () => {
  it('Navigálás a kezdőbetű szerinti kereséshez', () => {
    cy.visit('http://localhost:5173')
    cy.wait(2000)
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Kezdőbetű').click()
    cy.get('.input').type('a')
    cy.get('button.btn').should('have.text','Keresés').click();
    cy.wait(3000)
    cy.get('a.btn').should('have.text','Főoldal').click();
  })
})