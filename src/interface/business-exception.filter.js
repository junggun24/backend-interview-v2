"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BusinessExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var business_exception_1 = require("../exceptions/business-exception");
// import { ApplicationConsoleLogger } from '@logging/services/application-console.logger';
// import { parsingTokenUserId } from '@utils/token.utils';
var BusinessExceptionFilter = /** @class */ (function () {
    // private logger = new ApplicationConsoleLogger(BusinessExceptionFilter.name);
    function BusinessExceptionFilter(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    BusinessExceptionFilter.prototype["catch"] = function (exception, host) {
        var request = host.switchToHttp().getRequest();
        var token = request === null || request === void 0 ? void 0 : request.headers['access-token'];
        // const userId = token ? parsingTokenUserId(token) : null;
        var body = request.body ? JSON.stringify(request.body) : '';
        var message = "[".concat(request === null || request === void 0 ? void 0 : request.method, " ").concat(request === null || request === void 0 ? void 0 : request.url, " ").concat(body, "] ").concat(exception.message);
        // this.logger.error(message, exception.stack);
        var httpAdapter = this.httpAdapterHost.httpAdapter;
        var ctx = host.switchToHttp();
        var errorObject = exception.error;
        var responseBody = {
            status: 'error',
            code: errorObject === null || errorObject === void 0 ? void 0 : errorObject.code,
            message: exception.message,
            errors: []
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, (errorObject === null || errorObject === void 0 ? void 0 : errorObject.httpStatus) || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    };
    BusinessExceptionFilter = __decorate([
        (0, common_1.Catch)(business_exception_1.BusinessException)
    ], BusinessExceptionFilter);
    return BusinessExceptionFilter;
}());
exports.BusinessExceptionFilter = BusinessExceptionFilter;
