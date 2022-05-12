import { client } from "../database.js";

export async function findUserByEmail(email: string){
	return client.users.findUnique({
		where: {
			email: email
		}
	});
}

export async function insertUser(email: string, hashedPassword: string) {
	const user = await client.users.create({
		data: {
			email: email,
			password: hashedPassword
		}
	});
}