/* eslint-disable no-undef */
describe('onboarding page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('displays a logo, a title, and a "Get Started" button', () => {
    cy.getByData('logo').should('be.visible')
    cy.getByData('title').should('have.text', 'Chat anywhere with anyone')
    cy.getByData('get-started').should('be.visible')
  })
})