import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import handleErrorsMiddleware from './middlewares/handleErrorsMiddleware.js';
import router from "./routers/index.js";

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(handleErrorsMiddleware);

export default app;