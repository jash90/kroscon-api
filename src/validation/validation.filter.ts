import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { ValidationException } from "../validation/validation.exception";

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        return response.status(400).json({
            status: HttpStatus.BAD_REQUEST,
            statusCode: 400,
            errors: exception.validationErrors
        })
    }

}