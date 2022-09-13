import { NextFunction, Request, Response } from "express";
import { AppError, isAppError, serviceErrorToStatusCode } from "../utils/errorUtils.js";

export function handleErrorsMiddleware(err: Error | AppError, req: Request, res: Response, next: NextFunction) {
  console.log(err)
  if (isAppError(err)) {
    return res.status(serviceErrorToStatusCode[err.type]).send(err.message);
  }

  res.sendStatus(500);
}