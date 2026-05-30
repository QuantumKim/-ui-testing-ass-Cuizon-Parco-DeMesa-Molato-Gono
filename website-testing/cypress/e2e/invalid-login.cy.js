describe('PUP SIS Login', () => {

  it('fills login form', () => {

    cy.visit('https://sis2.pup.edu.ph/student/')

    // Verify page loaded
    cy.contains('Sign in to start your session')

    // Student Number
    cy.get('input[type="text"]')
      .type('2023-00041-UQ-1')

    // Birth Month dropdown
    cy.get('select')
      .eq(0)
      .select('December')

    // Birth Day dropdown
    cy.get('select')
      .eq(1)
      .select('3')

    // Birth Year dropdown
    cy.get('select')
      .eq(2)
      .select('2004')

    // Password
    cy.get('input[type="password"]')
      .type('Dec032004')

    //sign in button
    cy.get('input[value="Sign in"]').click()

  })

})