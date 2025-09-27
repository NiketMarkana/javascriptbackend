class ApiError extends Error //Error is inbuild class: https://nodejs.org/api/errors.html
{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null   // 👈 custom field
        //throw new ApiError(400, "Invalid input", { field: "email" });
        //   OR
        // "data": {
        //     "field": "email"
        // } means :- The error happened because the email field is invalid.
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)//Error.captureStackTrace() It automatically generates a stack trace for the error.
        }

    }
}

export { ApiError }