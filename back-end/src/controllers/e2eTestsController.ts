import { Request, Response } from "express";
import { authService } from "../services/authService.js";

async function seed(req: Request, res: Response) {
    await authService.seed(req.body);
    res.sendStatus(200);
}

async function truncate(req: Request, res: Response) {
    await authService.truncate();
    res.sendStatus(200);
}

export const e2eTestsController = {
    truncate,
    seed
};