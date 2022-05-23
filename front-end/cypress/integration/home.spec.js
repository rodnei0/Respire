describe("Home page", () => {
    it("should load homepage correctly", () => {

        cy.visit("http://localhost:3000/");

        cy.contains("Respire");
        cy.contains("Método");
        cy.contains("Progresso");
    });
});