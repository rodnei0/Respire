import { NextFunction, Request, Response } from "express";
import joi from 'joi';
import { unprocessableError } from "./handleErrorsMiddleware.js";

export default function validateSchemaMiddleware(schema: joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (validation.error) {
            throw unprocessableError('')
        }

        next();
    }
}