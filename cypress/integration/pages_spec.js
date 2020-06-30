/// <reference types="Cypress" />

describe('App', () => {
  it('show environments by default', () => {
    cy.visit('/')
    cy.url().should('include', '/app/291/environments')
    cy.contains('h1', 'release-rails-starter')
    cy.get('[data-testid="environment"] tr').should('have.length', 2)
  })

  it('selecting environment', () => {
    cy.visit('/')
    cy.get('nav select').select('417')
    cy.url().should('include', '/app/417/environments')
    cy.contains('h1', 'ev-external')
    cy.get('[data-testid="environment"] tr').should('have.length', 7)
  })

  it('showing environment details', () => {
    cy.visit('/')
    cy.get('table td:first-child a').click()
    cy.contains('h2', 'Info')
    cy.contains('h2', 'Hostnames')
    cy.contains('h2', 'Build')
  })
})
