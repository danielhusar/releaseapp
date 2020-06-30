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
    cy.contains('td', 'Name - staging')
    cy.contains('td', 'Namespace - release-rails-starter-staging-905b5609')
    cy.contains('td', 'Mode - development')
    cy.contains('td', 'Deployed Build - 10758')

    cy.contains('h2', 'Build')
    cy.contains('td', 'Deployed Build - 10758')
    cy.contains('td', 'Created at - Apr 08, 2020, 1:44:05 PM PDT')
    cy.contains('td', 'Deployed at - Apr 08, 2020, 1:51:02 PM PDT')

    cy.contains('h2', 'Hostnames')
    cy.contains('td', 'web - web-staging-release-rails-starter.releaseapp.io')
  })
})
