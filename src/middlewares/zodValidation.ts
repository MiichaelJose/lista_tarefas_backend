import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

// Função genérica de validação
function validateSchema(schemas: { params?: z.ZodObject<any, any, any, any>; body?: z.ZodObject<any, any, any, any> }) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (schemas.params) {
                schemas.params.parse(req.params);
            }
            if (schemas.body) {
                schemas.body.parse(req.body);
            }
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

// Middleware para validação de parâmetros e corpo
export function reqBodyValidateData(paramsSchema: z.ZodObject<any, any, any, any>, bodySchema: z.ZodObject<any, any, any, any>) {
    return validateSchema({
        params: paramsSchema,
        body: bodySchema
    });
}

// Middleware para validação de parâmetros
export function reqValidateData(paramsSchema: z.ZodObject<any, any, any, any>) {
    return validateSchema({
        params: paramsSchema
    });
}

// Middleware para validação de corpo
export function bodyValidateData(bodySchema: z.ZodObject<any, any, any, any>) {
    return validateSchema({
        body: bodySchema
    });
}
