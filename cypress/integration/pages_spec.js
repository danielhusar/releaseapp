/// <reference types="Cypress" />

describe('App', () => {
  it('show environments', () => {
    cy.visit('/')
    cy.contains('h1', 'Release-Rails-Starter')
  })
})
