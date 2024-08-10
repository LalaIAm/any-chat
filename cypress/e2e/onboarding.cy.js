describe("the onboarding page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });
  it('displays a logo, title, and a "get started" button', () => {
    cy.getByData("logo").should("be.visible");
    cy.getByData("title").should("be.visible");
    cy.getByData("btn").should("be.visible");
    cy.getByData("btn").should("have.text", "Get Started");
  });

  it('has a split-view design with two columns', () => {
    cy.getByData("left-column").should("be.visible");
    cy.getByData("right-column").should("be.visible");
  })
  it('displays the image of a hand holding a phone', () => {
    cy.getByData('phone-img').should('be.visible')
  })
});
