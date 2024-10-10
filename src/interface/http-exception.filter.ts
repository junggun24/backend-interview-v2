import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import {
  JsendErrorResponseModel,
  JsendFailureResponseModel,
} from './jsend-response.dto';
import { parsingTokenUserId } from '../auth/token.utils';

// import { ApplicationConsoleLogger } from '@logging/services/application-console.logger';
// import { parsingTokenUserId } from '@utils/token.utils';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  // private logger = new ApplicationConsoleLogger(AllExceptionsFilter.name);
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: Error, host: ArgumentsHost): unknown {
    console.log('aa', exception);
    const request = host.switchToHttp().getRequest();
    const token = request?.headers['access-token'] as string;
    console.log(token);
    const userId = token ? parsingTokenUserId(token) : null;
    console.log('userId', userId);
    // const body = request.body ? JSON.stringify(request.body) : '';
    // const message = `[${userId}] [${request?.method} ${request?.url} ${body}] ${exception.message}`;
    // this.logger.error(message, exception.stack);

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    if (exception instanceof HttpException) {
      console.log(
        'HttpException caught:',
        exception.getResponse(),
        exception.getStatus(),
      );

      httpAdapter.reply(
        ctx.getResponse(),
        exception.getResponse(),
        exception.getStatus(),
      );
      return;
    }

    const httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody =
      httpStatus >= 500
        ? new JsendErrorResponseModel('unknown error occurred', {})
        : new JsendFailureResponseModel(exception);

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
