import React from 'react'
import Cocktail from './Cocktail'
let tesztadat={
  strDrink:"Koktél neve",
  strDrinkThumb:"Kép URL",
  strCategory:"Koktél kategóriája",
  strAlcoholic:"Alkoholos-e"

}

describe('<Cocktail />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cocktail cocktail={tesztadat}/>)
    cy.get('h2').should('have.text','Koktél neve')
    cy.get('div.card:nth-child(1) > div:nth-child(2) > p:nth-child(2)').should('have.text','Koktél kategóriája')
    cy.get('div.card:nth-child(1) > div:nth-child(2) > p:nth-child(3)').should('have.text','Alkoholos-e')
    cy.get('img').should('be.visible')
  })
})