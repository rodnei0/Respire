import { client } from "../database.js";

export async function getTests() {
	const tests = await client.tests.findMany({
		include: {
			teachersDiscipline: {
				include: {
					teachers: true
				}
			}
		}
	});
	// const tests = await client.tests.findMany({
	// 	select: {
	// 		name: true,
	// 		pdfUrl: true,
	// 		teachersDiscipline: {
	// 			include: {
	// 				teachers: {
	// 					select: {
	// 						name: true
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// });

	console.log(tests)
}