import prisma from "../../src/database.js";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";

export type createUser = Omit<User, "id" >;

export default async function createUserFactory() {
    await prisma.$executeRaw`TRUNCATE TABLE users;`;

    const user: createUser = {
        email: faker.internet.email(),
        password: faker.internet.password()
    };

	const hashedPassword = bcrypt.hashSync(user.password, 12);

    await prisma.user.create({
        data: {...user, password: hashedPassword}
    });

    return user;
}