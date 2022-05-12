import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function getTests(req: Request, res: Response) {
    await testService.getTests();

    res.sendStatus(200);
}