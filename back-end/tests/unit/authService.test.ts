import { jest } from "@jest/globals";
import { authRepository } from "../../src/repositories/authRepository.js";
import * as authService from "../../src/services/authService.js";
import { CreateUserData } from "../../src/services/authService.js";
import { conflictError } from "../../src/utils/errorUtils";

describe("Auth Service Unit Tests", () => {
	it("should thrown a conflict error given a duplicate email", async () => {
		const user: CreateUserData = {
			email: "teste@teste.com",
			password: "123",
		};

		jest.spyOn(authRepository, "findByEmail").mockResolvedValue({
			id: 1,
			...user,
		});

		expect(authService.signUp(user)).rejects.toEqual(
			conflictError("Email must be unique")
		);
	});
});
