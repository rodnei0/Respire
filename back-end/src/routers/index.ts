import { Router } from "express";
import authRouter from "./authRouter.js";
import e2eRouter from "./e2eRouter.js";
import progressRouter from "./progressRouter.js";

const router = Router();

router.use(authRouter);
router.use(progressRouter);
router.use(e2eRouter)

export default router;