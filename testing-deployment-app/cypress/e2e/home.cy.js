describe("Home Page", () => {
    it("Should load the homepage and display welcome text", () => {
        cy.visit("/");
        cy.contains("Welcome to my Next.js App");
        cy.contains("This is homepage");
    });

    it("should navigate to About page", () => {
        cy.visit("/");
        cy.contains("About").click();
        cy.url().should("include", "/about");
        cy.contains("About Us");
    })
})