describe("The Join Chat Page", () => {
  it("is accessed from the onboarding page", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.getByData("btn").click();

    cy.getByData("logo").should("be.visible");
    cy.getByData("join-modal").should("be.visible");
  });

  it("has an input field for a nickname", () => {
    cy.visit("http://localhost:5173/join");
    cy.getByData("nickname-input").should("be.visible");
  });

  it("validates a nickname is longer than 3 and less than 64", () => {
    cy.visit("http://localhost:5173/join");
    cy.getByData("nickname-input").type("ab");
    cy.getByData("short").should("be.visible");

    cy.getByData("nickname-input").type("abcd");
    cy.getByData("short").should("not.exist");
    cy.getByData("nickname-input").type(
      "abcd cy.getByData('nicknda;lfkdl;akfl;dka;kfl;adkf;kajfla;jdkfjal;djfla;sjfklajdskflal;djflaj"
    );
    cy.getByData("long").should("be.visible");
  });
    
    it('allows the user to navigate to the main chat page', () => {
        cy.visit("http://localhost:5173/join");
        cy.getByData('nickname-input').type('Cypress')
        cy.getByData('btn').click()
        cy.url().should('include', '/chat')
        
    })
});
