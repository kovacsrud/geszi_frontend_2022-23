import React from 'react'
import Header from './Header'

describe('<Header />', () => {
  it('Fejléc tesztje', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header cim={"Cím szövege"} />)
    cy.get('h1').should('have.text','Cím szövege')
  })
})