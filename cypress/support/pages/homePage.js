const locator = require('../locators/homePageLocator')

class HomePage {

    async verifyHomePageAppears() {
        cy.xpath(locator.datatestid.title_text).should('exist')
    }

}

module.exports = new HomePage()
