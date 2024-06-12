const loginPage = require('../support/pages/loginPage')
const homePage = require('../support/pages/homePage')

describe('User should be able to login', () => {
  // flaky
  it('with valid data', () => {
    loginPage.visitLoginPageUrl()
    loginPage.verifyLoginPageAppears()
    loginPage.inputEmail()
    loginPage.inputPassword()
    loginPage.clickLoginButton()

    homePage.verifyHomePageAppears()
  })

})
