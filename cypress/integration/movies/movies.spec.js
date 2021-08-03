describe("Home page", () => {
  beforeEach(() => {
      cy.visit('/')
  })

  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.findByRole('heading').should('contain', 'Movies')
  })
})