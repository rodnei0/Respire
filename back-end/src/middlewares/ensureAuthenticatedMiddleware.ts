import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as authService from "../services/authService.js";
import { unauthorizedError } from "../utils/errorUtils.js";

export default async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  if (!authorization) throw unauthorizedError("Missing authorization header");

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Missing token");

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: number;
    };
    const user = await authService.findById(userId);
    res.locals.user = user;

    next();
  } catch {
    throw unauthorizedError("Invalid token");
  }
}