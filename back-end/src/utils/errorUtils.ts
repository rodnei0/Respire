type AppErrorTypes =
	| "conflict"
	| "not_found"
	| "unauthorized"
	| "wrong_schema"
	| "bad_request";

export interface AppError {
	type: AppErrorTypes;
	message: string;
}

export const serviceErrorToStatusCode = {
	unauthorized: 401,
	forbidden: 403,
	notFound: 404,
	conflict: 409,
	unprocessable: 422,
  };

export function isAppError(error: object): error is AppError {
	return (error as AppError).type !== undefined;
}

export function unauthorizedError(entity: string) {
	return {
		type: "unauthorized",
		message: `You don't have permission to do this, chek your "${entity}"!`
	};
}

export function forbiddenError(entity: string) {
	return {
		type: "forbidden",
		message: `You don't have permission to do this, chek your "${entity}"!`
	};
}

export function notFoundError(entity: string) {
	return {
		type: "notFound",
		message: `Could not find specified "${entity}"!`
	};
}

export function conflictError(entity: string) {
	return {
		type: "conflict",
		message: `The specified "${entity}" already exists!`
	};
}

export function unprocessableError(entity: string) {
	return {
		type: "unprocessable",
		message: `Check your e-mail and password!`
	};
}