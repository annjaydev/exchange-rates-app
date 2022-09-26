import { favoriteIcon, selector, tableRow } from '../selectors/selectors'

Cypress.Commands.add('convertCurrency', (from, to, amount) => {
  cy.get('.ant-select-selector').eq(1).click()
  cy.contains(from).click()

  cy.get('.ant-input').first().clear().type(amount)

  cy.get('.ant-select-selector').last().click()
  cy.contains(to).click()
})

Cypress.Commands.add('changeExchangeFromCurrency', (currency) => {
  cy.get(selector).first().click()
  cy.contains(currency).click()
})

Cypress.Commands.add('changeBaseCurrency', (base) => {
  cy.get(selector).first().click()
  cy.contains(base).click()
})

Cypress.Commands.add('pushOrPopFavorite', (code) => {
  cy.get(tableRow).contains(code).parent().find(favoriteIcon).click()
})

Cypress.Commands.add('changeTablePage', (page) => {
  cy.get(`[title="${page}"]`).click()
})

