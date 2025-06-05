describe("About Page", () => {
    it("should load the About page and display correct information", () => {
        cy.visit("/about");
        cy.contains("About Us");
        cy.contains("This page contains information about our app.");
    });

    it("should navigate back to the Home", () => {
        cy.visit("/about");
        cy.contains("Home").click();
        cy.url().should("include", "/");
        cy.contains("Welcome to my Next.js App");
    })
})