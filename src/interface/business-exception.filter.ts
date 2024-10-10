import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { BusinessException } from '../exceptions/business-exception';

// import { ApplicationConsoleLogger } from '@logging/services/application-console.logger';
// import { parsingTokenUserId } from '@utils/token.utils';

@Catch(BusinessException)
export class BusinessExceptionFilter
  implements ExceptionFilter<BusinessException>
{
  // private logger = new ApplicationConsoleLogger(BusinessExceptionFilter.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: BusinessException, host: ArgumentsHost): void {
    const request = host.switchToHttp().getRequest();
    const token = Object(request?.cookies)['access-token'] as string;
    console.log('2', token);
    // const userId = token ? parsingTokenUserId(token) : null;
    const body = request.body ? JSON.stringify(request.body) : '';
    const message = `[${request?.method} ${request?.url} ${body}] ${exception.message}`;
    // this.logger.error(message, exception.stack);

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const errorObject = exception.error;

    const responseBody = {
      status: 'error',
      code: errorObject?.code,
      message: exception.message,
      errors: [],
    };

    httpAdapter.reply(
      ctx.getResponse(),
      responseBody,
      errorObject?.httpStatus || HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
