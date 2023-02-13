import React from 'react'
import Header from './Header'

describe('<Header />', () => {
  it('Fejléc teszt', () => {
    // see: https://on.cypress.io/mounting-react
    
    cy.mount(<Header />)
    cy.get('h1').should('contains.text','Koktél kereső')
    
  })
})