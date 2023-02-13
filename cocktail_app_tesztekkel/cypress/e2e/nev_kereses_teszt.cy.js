describe('Név szerinti keresés', () => {
  it('Navigálás a név szerinti kereséshez', () => {
    cy.visit('http://localhost:5173')
    cy.wait(2000)
    cy.get('.menu > li:nth-child(3) > a:nth-child(1)').should('have.text','Név').click()
    cy.get('.text-3xl').should('have.text','Keresés a koktél neve szerint')
    cy.get('.input').type('lady')
    cy.get('button.btn').click()
    cy.wait(2000)
    cy.get('a.btn').click()
  })
})