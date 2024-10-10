import { HttpStatus } from '@nestjs/common';

export const Error = {
  // COMMON
  BAD_REQUEST: {
    httpStatus: HttpStatus.BAD_REQUEST,
    code: 'BAD_REQUEST',
    message: 'bad request',
  },
  NOT_FOUND: {
    httpStatus: HttpStatus.NOT_FOUND,
    code: 'NOT_FOUND',
    message: 'not found data',
  },
  UNAUTHORIZED: {
    httpStatus: HttpStatus.UNAUTHORIZED,
    code: `UNAUTHORIZED`,
    message: `unauthorized`,
  },
  FORBIDDEN: {
    httpStatus: HttpStatus.FORBIDDEN,
    code: `FORBIDDEN`,
    message: `forbidden`,
  },
  CONFLICT: {
    httpStatus: HttpStatus.CONFLICT,
    code: 'CONFLICT',
    message: 'data conflicted',
  },
  INTERNAL_SERVER_ERROR: {
    httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
    code: 'INTERNAL_SERVER_ERROR',
    message: 'an error occurred while processing on the server',
  },
  DB_POSTGRESQL_ERROR: {
    httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
    code: 'DB_POSTGRESQL_ERROR',
    message: 'an error occurred while postgreSQL query',
  },
  DB_REDIS_ERROR: {
    httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
    code: 'DB_REDIS_ERROR',
    message: 'an error occurred while redis query',
  },
  UNKNOWN_ERROR: {
    httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
    code: 'UNKNOWN_ERROR',
    message: 'unknown error occurred',
  },
} as const;

export type ErrorType = (typeof Error)[keyof typeof Error];
