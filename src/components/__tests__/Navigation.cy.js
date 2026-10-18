import Wizard from '../Wizard.vue'

describe('Registration navigation', () => {
  beforeEach(() => cy.mount(Wizard))

  it('validates required fields when jumping to review from the sidebar', () => {
    cy.get('nav button').eq(2).click()
    cy.get('#username').should('have.attr', 'aria-invalid', 'true')
    cy.get('#username').type('valid_username')
    cy.get('nav button').eq(2).click()
    cy.get('#email').should('have.attr', 'aria-invalid', 'true')
    cy.get('#email').type('hello@example.com')
    cy.get('nav button').eq(2).click()
    cy.contains('Username: valid_username')
    cy.contains('Email: hello@example.com')
  })

  it('retains field values when returning to edit them', () => {
    cy.get('#username').type('valid_username')
    cy.get('#btn-next').click()
    cy.get('#email').type('hello@example.com')
    cy.get('#btn-next').click()
    cy.get('nav button').first().click()
    cy.get('#username').should('have.value', 'valid_username')
    cy.get('#btn-next').click()
    cy.get('#email').should('have.value', 'hello@example.com')
  })

  it('prevents review after a previously valid username becomes invalid', () => {
    cy.get('#username').type('valid_username')
    cy.get('#btn-next').click()
    cy.get('#email').type('hello@example.com')
    cy.get('nav button').first().click()
    cy.get('#username').clear().type('x')
    cy.get('nav button').eq(2).click()
    cy.contains('Invalid Username.')
    cy.get('#username').should('be.visible')
  })

  it('opens the description checker once and returns to review', () => {
    cy.get('#username').type('valid_username')
    cy.get('#btn-next').click()
    cy.get('#email').type('hello@example.com')
    cy.get('#btn-next').click()
    cy.contains('button', 'Check Description').click()
    cy.get('#description').should('be.visible')
    cy.get('#btn-prev').click()
    cy.contains('Review your information')
  })
})
