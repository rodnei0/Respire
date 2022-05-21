import { Request, Response } from "express";
import * as progressService from "../services/progressService.js";

async function findMany(req: Request, res: Response) {
  const progress = await progressService.findMany();
  res.send({ categories: progress });
}

export {
  findMany,
};
