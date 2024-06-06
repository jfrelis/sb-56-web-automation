describe('User should be able to login', () => {
  it('with valid data', () => {
    // 1. akses url kasiraja v
    // 2. validasi bahwa login page muncul v
    // 3. input email -> jojo123@test.com v
    // 4. input password -> jojo123 v
    // 5. click login button v
    // 6. validasi bahwa login berhasil

    cy.visit('https://kasiraja.ajikamaludin.id/login')
    // cy.get('#email').should('exist')
    // cy.get('#password').should('exist')
    // cy.get('.chakra-button').should('exist')

    cy.xpath('//*[@id="email"]').should('exist')
    cy.xpath('//*[@id="password"]').should('exist')
    cy.xpath('//button[contains(text(), "login")]').should('exist')

    cy.xpath('//*[@id="email"]').type('jojo123@test.com')
    cy.xpath('//*[@id="password"]').type('jojo123')
    cy.xpath('//button[contains(text(), "login")]').click()

    cy.xpath('//*[contains(text(), "hai")]').should('exist')

  })
})

describe('User should be able to login', () => {
  it('with valid data', () => {
    // 1. akses url kasiraja v
    // 2. validasi bahwa login page muncul v
    // 3. input email -> jojo123@test.com v
    // 4. input password -> jojo123 v
    // 5. click login button v
    // 6. validasi bahwa login berhasil

    cy.visit('https://kasiraja.ajikamaludin.id/login')
    // cy.get('#email').should('exist')
    // cy.get('#password').should('exist')
    // cy.get('.chakra-button').should('exist')

    cy.xpath('//*[@id="email"]').should('exist')
    cy.xpath('//*[@id="password"]').should('exist')
    cy.xpath('//button[contains(text(), "login")]').should('exist')

    cy.xpath('//*[@id="email"]').type('jojo123@test.com')
    cy.xpath('//*[@id="password"]').type('jojo123')
    cy.xpath('//button[contains(text(), "login")]').click()

    cy.xpath('//*[contains(text(), "hai")]').should('exist')

  })
})
