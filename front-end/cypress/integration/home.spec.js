describe("Home page", () => {
    it("should find methods", () => {

        cy.visit("http://localhost:3000/");

        cy.contains('Respire');
        cy.contains('Método');
        cy.contains('Progresso');
    });
});