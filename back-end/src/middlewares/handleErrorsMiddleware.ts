import { NextFunction, Request, Response } from "express";
import { AppError, isAppError, serviceErrorToStatusCode } from "../utils/errorUtils.js";

// const serviceErrorToStatusCode = {
//   unauthorized: 401,
//   forbidden: 403,
//   notFound: 404,
//   conflict: 409,
//   unprocessable: 422,
// };

// export function unauthorizedError(entity: string) {
//   return { 
//     type: "unauthorized",
//     message: `You don't have permission to do this, chek your "${entity}"!` 
//   };
// }

// export function forbiddenError(entity: string) {
//   return { 
//     type: "forbidden",
//     message: `You don't have permission to do this, chek your "${entity}"!` 
//   };
// }

// export function notFoundError(entity: string) {
//   return { 
//     type: "notFound",
//     message: `Could not find specified "${entity}"!` 
//   };
// }

// export function conflictError(entity: string) {
//   return { 
//     type: "conflict",
//     message: `The specified "${entity}" already exists!` 
//   };
// }

// export function unprocessableError(entity: string) {
//   return { 
//     type: "unprocessable",
//     message: `Check your e-mail and password!` 
//   };
// }

export function handleErrorsMiddleware(err: Error | AppError, req: Request, res: Response, next: NextFunction) {
  if (isAppError(err)) {
    return res.status(serviceErrorToStatusCode[err.type]).send(err.message);
  }

  res.sendStatus(500);
}