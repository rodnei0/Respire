import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository.js";
import {
	conflictError,
	notFoundError,
	unauthorizedError,
} from "../middlewares/handleErrorsMiddleware.js";
// import { users } from "@prisma/client";

export type authTypes =
  | "sign-in"
  | "sign-up";

export async function signUp(email: string, password: string) {
	await verifyIfUserExists(email, 'sign-up');

	const hashedPassword = bcrypt.hashSync(password, 12);

	authRepository.insertUser(email, hashedPassword);
}

export async function signIn(email: string, password: string) {
	const user = await verifyIfUserExists(email, 'sign-in');
	verifyPassword(user, password);

	const token = jwt.sign(
	  {
	    id: user.id,
	  },
	  process.env.JWT_SECRET
	);

	return { token: token }
}

export async function verifyToken(token: string) {
	return jwt.verify(token, process.env.JWT_SECRET);
}

export async function verifyIfUserExists(email: string, type: authTypes) {
	const existingUser = await authRepository.findUserByEmail(email);

	if (!existingUser && type === 'sign-in') throw notFoundError('Email');
	if (existingUser && type === 'sign-up') throw conflictError('Email');

	return existingUser;
}

export function verifyPassword(user: any, password: string) {
	if (!bcrypt.compareSync(password, user.password)) throw unauthorizedError('Password');
}

export async function findById(id: number) {
	const user = await authRepository.findById(id);
	if (!user) throw notFoundError("User not found");
  
	return user;
}