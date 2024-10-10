"use strict";
exports.__esModule = true;
exports.Error = void 0;
var common_1 = require("@nestjs/common");
exports.Error = {
    // COMMON
    BAD_REQUEST: {
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        code: 'BAD_REQUEST',
        message: 'bad request'
    },
    NOT_FOUND: {
        httpStatus: common_1.HttpStatus.NOT_FOUND,
        code: 'NOT_FOUND',
        message: 'not found data'
    },
    UNAUTHORIZED: {
        httpStatus: common_1.HttpStatus.UNAUTHORIZED,
        code: "UNAUTHORIZED",
        message: "unauthorized"
    },
    FORBIDDEN: {
        httpStatus: common_1.HttpStatus.FORBIDDEN,
        code: "FORBIDDEN",
        message: "forbidden"
    },
    CONFLICT: {
        httpStatus: common_1.HttpStatus.CONFLICT,
        code: 'CONFLICT',
        message: 'data conflicted'
    },
    INTERNAL_SERVER_ERROR: {
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        code: 'INTERNAL_SERVER_ERROR',
        message: 'an error occurred while processing on the server'
    },
    DB_POSTGRESQL_ERROR: {
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        code: 'DB_POSTGRESQL_ERROR',
        message: 'an error occurred while postgreSQL query'
    },
    DB_REDIS_ERROR: {
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        code: 'DB_REDIS_ERROR',
        message: 'an error occurred while redis query'
    },
    UNKNOWN_ERROR: {
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        code: 'UNKNOWN_ERROR',
        message: 'unknown error occurred'
    }
};
