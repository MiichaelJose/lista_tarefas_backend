export class ApiError extends Error {
    statusCode: any;
    error: any;
    details: {};

    constructor(statusCode: any, error: any, message: string | undefined, details = {}) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.details = details;
    }
}