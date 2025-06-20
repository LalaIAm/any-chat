/* eslint-disable no-undef */
describe('enter chat page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/join-chat')
    })
    
    it('displays a form with an input field for nickname', () => {
        cy.get('.joinmodal').should('be.visible')
        cy.get('.textinput').should('be.visible')
        cy.get('.please-enter-your-container').should('be.visible')
    })
    
    it('shows error message when nickname is too short', () => {
        cy.get('.textinput').type('ab')
        cy.get('.error-message').should('have.text', 'Nickname is too short.')
    })
    
    it('shows error message when nickname is too long', () => {
        const longNickname = 'a'.repeat(62)
        cy.get('.textinput').type(longNickname)
        cy.get('.error-message').should('have.text', 'Nickname is too long.')
    })
    
    it('enables submit button when nickname is valid', () => {
        cy.get('.textinput').type('validNickname')
        cy.get('.error-message').should('have.text', '')
    })
    
    it('navigates to chat page on valid submission', () => {
        cy.get('.textinput').type('validNickname')
        cy.getByData('login-btn').click()
        cy.url().should('include', '/chat')
    })
})