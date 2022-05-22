import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/database.js";
import { CreateUserData } from "../../src/services/authService.js";
import userBodyFactory from "../factories/userBodyFactory.js";
import createUserFactory from "../factories/createUserFactory.js";

describe("Integration Tests", () => {
	describe("POST /sign-up", () => {
		afterEach(truncateUsers);
		afterAll(disconnect);

		it("giving an invalid body should return status 422", async () => {
			const body = {};
	
			const result = await supertest(app).post("/sign-up").send(body);
	
			expect(result.status).toEqual(422);
		});

		it("should persist the user given a valid body", async () => {
			const body = userBodyFactory();

			const response = await supertest(app).post("/sign-up").send(body);
			const createdUser = await prisma.user.findUnique({
				where: { email: body.email },
			});

			expect(response.status).toEqual(201);
			expect(createdUser).not.toBeNull();
		});

	});
	
	describe("POST /sign-in", () => {
		beforeEach(truncateUsers);
		afterAll(disconnect);
		
		it("giving a valid email/password should return status 200 and a token", async () => {
			const user = await createUserFactory();

			const result = await supertest(app).post("/sign-in").send(user);

			expect(result.status).toEqual(200);
			expect(typeof result.body.token).toEqual("string");
			expect(result.body.token.length).toBeGreaterThan(0);
		});
	});
});

async function truncateUsers() {
    await prisma.$executeRaw`TRUNCATE TABLE users;`;
}

async function disconnect() {
    await prisma.$disconnect();
}