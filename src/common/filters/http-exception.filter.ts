import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let error: object;
    if (statusCode < HttpStatus.INTERNAL_SERVER_ERROR)
      error =
        typeof response === 'string'
          ? { message: [exceptionResponse] }
          : (exceptionResponse as object);
    if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR)
      error = { message: [exception.message] };

    response.status(statusCode).json({
      statusCode,
      ...error,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    });
  }
}
