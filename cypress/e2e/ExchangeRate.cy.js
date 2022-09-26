const { tableRow, favoriteIcon } = require('../selectors/selectors')

describe('exchange rate app auto test', () => {
  it('Convert Page', () => {
    cy.visit(`/convert`)

    //title should be visible
    cy.contains('Currency Converter').should('be.visible')

    //base currency selector should be visible
    cy.contains('Russian Ruble').first().should('be.visible')

    //exchangeFrom selector shoul be visible
    cy.contains('Russian Ruble').last().should('be.visible')

    //exchangeTo selector shoul be visible
    cy.contains('United States Dollar').first().should('be.visible')

    //convert currencies and check inputs suffixes
    cy.convertCurrency('Polish Zloty', 'Turkish Lira', 180)
    cy.contains('PLN').should('be.visible')
    cy.contains('TRY').should('be.visible')
  })

  it('All Rates Page', () => {
    //go to rates page and check the url
    cy.contains('All Rates').click()
    cy.url().should('include', '/all-rates')

    //move to the las page and as zwl currency to favorites
    cy.changeTablePage(17)
    cy.pushOrPopFavorite('ZWL')

    // check that zwl got into favorites and on the top of the table
    cy.changeTablePage(1)
    cy.contains('ZWL')

    //pop zwl from the favorites and check the last page once again
    cy.pushOrPopFavorite('ZWL')
    cy.changeTablePage(17)
    cy.contains('ZWL')

    //choose lots of currencies as favorites and check the first row of table
    for (let i = 0; i < 11; i++) {
      cy.get(tableRow).last().find(favoriteIcon).click()
    }

    cy.changeTablePage(1)
    cy.get(tableRow).first().contains('XOF')
  })
})
