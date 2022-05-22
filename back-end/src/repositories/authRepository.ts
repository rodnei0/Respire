import prisma from "../database.js";

export async function findByEmail(email: string){
	return prisma.user.findUnique({
		where: {
			email: email
		}
	});
}

export async function findById(id: number){
	return prisma.user.findUnique({
		where: {
			id: id
		}
	});
}

export async function insertUser(email: string, hashedPassword: string) {
	const user = await prisma.user.create({
		data: {
			email: email,
			password: hashedPassword
		}
	});
}0

export const authRepository = {
    findByEmail,
    findById,
    insertUser,
};