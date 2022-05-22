import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository.js";
import {
	conflictError,
	notFoundError,
	unauthorizedError,
} from "../utils/errorUtils.js"
import { User } from "@prisma/client";

export type CreateUserData = Omit<User, "id">;


export type authTypes =
  | "sign-in"
  | "sign-up";

export async function signUp(createUserData: CreateUserData) {
	await verifyIfUserExists(createUserData.email, 'sign-up');

	const hashedPassword = bcrypt.hashSync(createUserData.password, 12);

	authRepository.insertUser(createUserData.email, hashedPassword);
}

export async function signIn(createUserData: CreateUserData) {
	const user = await verifyIfUserExists(createUserData.email, 'sign-in');
	verifyPassword(user, createUserData.password);

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
	const existingUser = await authRepository.findByEmail(email);

	if (!existingUser && type === 'sign-in') throw notFoundError('Email');
	if (existingUser && type === 'sign-up') throw conflictError('Email');

	return existingUser;
}

export function verifyPassword(user: User, password: string) {
	if (!bcrypt.compareSync(password, user.password)) throw unauthorizedError('Password');
}

export async function findById(id: number) {
	const user = await authRepository.findById(id);
	if (!user) throw notFoundError("User not found");
  
	return user;
}