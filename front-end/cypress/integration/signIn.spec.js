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
            email: 'teste@teste.com',
            password: '123'
        }

        cy.request("POST", "http://localhost:5000/e2e/seed", user);

        cy.visit("http://localhost:3000/sign-in");

        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get("#signIn").click();

        cy.url().should('equal', 'http://localhost:3000/');
    });
});