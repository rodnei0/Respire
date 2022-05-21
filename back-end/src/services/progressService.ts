import * as progressRepository from "../repositories/progressRepository.js";

async function findMany() {
	return progressRepository.findMany();
}

export {
	findMany,
};