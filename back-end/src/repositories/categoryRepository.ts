import { client } from "../database.js";

export async function insertCategory(name: string) {
	const category = await client.categories.create({
		data: {
			name: name
		}
	});
}