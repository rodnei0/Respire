import prisma from "../database.js";
import bcrypt from "bcrypt";
import { CreateUserData } from "../services/authService.js";

async function findByEmail(email: string){
	return prisma.user.findUnique({
		where: {
			email: email
		}
	});
}

async function findById(id: number){
	return prisma.user.findUnique({
		where: {
			id: id
		}
	});
}

async function insertUser(email: string, hashedPassword: string) {
	const user = await prisma.user.create({
		data: {
			email: email,
			password: hashedPassword
		}
	});
}

async function seed(user: CreateUserData) {
	const hashedPassword = bcrypt.hashSync(user.password, 12);

    await prisma.user.create({
        data: {...user, password: hashedPassword}
    });
}

async function truncate() {
    await prisma.$executeRaw`TRUNCATE TABLE users;`;
}

export const authRepository = {
    findByEmail,
    findById,
    insertUser,
	seed,
	truncate
};