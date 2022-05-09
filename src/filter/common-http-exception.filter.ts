import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Response } from 'express';
import { CommonException } from '../exception/common.exception';

export type CommonExceptionBody = {
  status_code: HttpStatus;
  error_message: string;
  details?: string | Array<string>;
};

@Catch(HttpException)
@Injectable()
export class CommonHttpExceptionFilter implements ExceptionFilter {
  catch(exception: CommonException | HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof CommonException) {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .json(this.getResponseBody(exception));
    }

    return response.status(exception.getStatus()).json({
      status_code: exception.getStatus(),
      error_message: 'Internal server error: Something went wrong',
      details: exception.message,
    });
  }

  private getResponseBody(exception: CommonException) {
    const body: CommonExceptionBody = {
      status_code: exception.getStatus(),
      error_message: exception.message,
    };

    return body;
  }
}
