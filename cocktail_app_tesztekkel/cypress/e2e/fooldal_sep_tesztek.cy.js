describe('Főoldal teszt', () => {
  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173')
  })

  it('Fejléc szövegének vizsgálata', () => {
      cy.get('.py-5').should('have.text','Koktél kereső')
  })


  it('Hero H1 szöveg vizsgálata',()=>{
    cy.get('.hero-content > div:nth-child(2) > h1:nth-child(1)').should('have.text','Cocktail Kereső')
  })

  it('Főoldal gomb a navbaron',()=>{
    cy.get('.navbar').should('contains.text','Főoldal')
  })

  it('Főoldalra navigáló gomb vizsgálata',()=>{
    cy.get('.btn').should('have.text','Főoldal')
  })

  it('Főoldal hivatkozásának vizsgálata',()=>{
    cy.get('.btn').should('have.attr','href','/')
  })

  it('Kezdőbetű link szövegének ellenőrzése',()=>{
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Kezdőbetű')
  })

  it('Kezdőbetű link ellenőrzése',()=>{
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.attr','href','/letter')
  })

  
  it('Összetevő link szövegének ellenőrzése',()=>{
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Összetevő')
  })

  it('Összetevők link ellenőrzése',()=>{
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.attr','href','/ingredient')
  })

  it('Név link szövegének ellenőrzése',()=>{
    cy.get('.menu > li:nth-child(3) > a:nth-child(1)').should('have.text','Név')
  })

  it('Név link ellenőrzése',()=>{
    cy.get('.menu > li:nth-child(3) > a:nth-child(1)').should('have.attr','href','/name')
  })

  it('Kép megjelenik-e',()=>{
    cy.get('.max-w-sm').should('be.visible')
  })

  it('Kép teszt',()=>{
    cy.get('.hero-content').find('img').should('be.visible')
  })


})