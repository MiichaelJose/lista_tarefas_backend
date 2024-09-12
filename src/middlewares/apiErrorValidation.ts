import { ApiError } from "../libs/apiError";

export default function ApiErrorValidation(error: ApiError, req: any, res: any, next: any) {
    if (error instanceof ApiError) {
        // \x1b colorir a msg de erro
        console.error(`\x1b[34mError-Code: ${error.statusCode} | Error-Type: ${error.error} | Message: ${error.message}\x1b[0m`);

        res.status(error.statusCode).json({
            error: error.error,
            message: error.message,
            details: error.details
        });
    } else {
        console.error('Internal Server Error.', error);
    }
}