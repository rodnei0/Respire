import { faker } from "@faker-js/faker";

describe("Progress page", () => {
    beforeEach(() => {
        cy.request("POST", "http://localhost:5000/e2e/truncate", {});
    });
    afterEach(() => {
        cy.request("POST", "http://localhost:5000/e2e/truncate", {});
    });

    it("should redirect to signup page when trying to access progress page if not logged", () => {

        cy.visit("http://localhost:3000/");

        cy.get("#progress").click();

        cy.contains('Você precisa estar logado');
        cy.contains('Cadastro');
    });
});