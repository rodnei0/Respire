import { faker } from "@faker-js/faker";

describe("SignUp page", () => {
    beforeEach(() => {
        cy.request("POST", "http://localhost:5000/e2e/truncate", {});
    });
    afterEach(() => {
        cy.request("POST", "http://localhost:5000/e2e/truncate", {});
    });

    it("should signup succcessfully", () => {
        const user = {
            email: "teste@teste.com",
            password: "123"
        };

        cy.visit("http://localhost:3000/sign-up");

        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get("#passwordConfirmation").type(user.password);
        cy.get("#signUp").click();

        cy.url().should("equal", "http://localhost:3000/sign-in");
        cy.contains("sucesso");
    });
});