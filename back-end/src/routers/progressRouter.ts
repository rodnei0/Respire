import { Router } from "express";
import * as progressController from "../controllers/progressController.js";
import ensureAuthenticatedMiddleware from "../middlewares/ensureAuthenticatedMiddleware.js";

const progressRouter = Router();

progressRouter.get("/categories", ensureAuthenticatedMiddleware, progressController.findMany);

export default progressRouter;
