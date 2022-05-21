import { Router } from "express";
import authRouter from "./authRouter.js";
import progressRouter from "./progressRouter.js";

const router = Router();

router.use(authRouter);
router.use(progressRouter);

export default router;