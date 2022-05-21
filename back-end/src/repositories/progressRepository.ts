import prisma from "../database.js";

export async function findMany() {
	const progress = await prisma.progress.findMany({})
};