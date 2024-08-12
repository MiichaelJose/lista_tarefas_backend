import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

export function reqbodyValidateData(paramsSchema: z.ZodObject<any, any, any, any>, bodySchema: z.ZodObject<any, any, any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            paramsSchema.parse(req.params);
            bodySchema.parse(req.body);
            
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue: any) => ({
                    message: `${issue.path.join(".")} is ${issue.message}`
                }));
                res.status(StatusCodes.BAD_REQUEST).json({
                    error: "Invalid data",
                    details: errorMessages
                });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: "Internal Server Error"
                });
            }
        }
    };
}

export function reqValidateData(paramsSchema: z.ZodObject<any, any, any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            paramsSchema.parse(req.params);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue: any) => ({
                    message: `${issue.path.join(".")} is ${issue.message}`
                }));
                res.status(StatusCodes.BAD_REQUEST).json({
                    error: "Invalid data",
                    details: errorMessages
                });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: "Internal Server Error"
                });
            }
        }
    };
}

export function bodyValidateData(bodySchema: z.ZodObject<any, any, any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            bodySchema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue: any) => ({
                    message: `${issue.path.join(".")} is ${issue.message}`
                }));
                res.status(StatusCodes.BAD_REQUEST).json({
                    error: "Invalid data",
                    details: errorMessages
                });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: "Internal Server Error"
                });
            }
        }
    };
}