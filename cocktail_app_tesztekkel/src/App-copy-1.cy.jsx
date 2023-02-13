import React from 'react'
import App from './App'

describe('<App />', () => {
  it('Betöltődés vizsgálata', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})