import React from 'react'
import Cocktail from './Cocktail'

let cocktail={
  strDrinkThumb:"thumb",
  strDrink:"ital",
  strCategory:"kategória",
  strAlcoholic:"alkoholos-e"
}

describe('<Cocktail />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cocktail cocktail={cocktail} />)
    cy.get('img').should('have.attr','src').should('contains','thumb');
    cy.get('h2').should('contains.text','ital');
  })
})