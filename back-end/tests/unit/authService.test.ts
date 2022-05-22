import { jest } from "@jest/globals";
import { authRepository } from "../../src/repositories/authRepository.js";
import * as authService from "../../src/services/authService.js";
import bcrypt from "bcrypt";
import { conflictError, notFoundError, unauthorizedError } from "../../src/utils/errorUtils";
import userBodyFactory from "../factories/userBodyFactory.js";


describe("Auth Service Unit Tests", () => {
	it("should thrown a conflict error given a duplicate email in sign-up", async () => {
		const user = userBodyFactory();

		jest.spyOn(authRepository, "findByEmail").mockResolvedValue({
			id: 1,
			...user,
		});

		expect(authService.signUp(user)).rejects.toEqual(
			conflictError("Email")
		);
	});

	it("should thrown a not found error given an invalid email in sign-in", async () => {
		const user = userBodyFactory();

		jest.spyOn(authRepository, "findByEmail").mockResolvedValue(null);

		expect(authService.signIn(user)).rejects.toEqual(
			notFoundError("Email")
		);
	});

	it("should thrown a not unauthorized error given an invalid password in sign-in", async () => {
		const user = userBodyFactory();

		jest.spyOn(authRepository, "findByEmail").mockResolvedValue({
			id: 1,
			...user,
		});
		jest.spyOn(bcrypt, "compareSync").mockReturnValue(false)

		expect(authService.signIn(user)).rejects.toEqual(
			unauthorizedError('Password')
		);
	});
});