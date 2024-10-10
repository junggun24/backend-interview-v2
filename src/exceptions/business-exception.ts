import { ErrorType } from './error-code';

export class BusinessException extends Error {
  error: ErrorType;

  constructor(error: ErrorType);
  constructor(error: ErrorType, message: string);
  constructor(error: ErrorType, message?: string) {
    super(message);
    this.error = error;
  }
}
