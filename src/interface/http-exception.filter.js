"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllExceptionsFilter = void 0;
var common_1 = require("@nestjs/common");
var jsend_response_dto_1 = require("./jsend-response.dto");
var AllExceptionsFilter = /** @class */ (function () {
    function AllExceptionsFilter(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    AllExceptionsFilter.prototype["catch"] = function (exception, host) {
        var request = host.switchToHttp().getRequest();
        var token = request === null || request === void 0 ? void 0 : request.headers['access-token'];
        var body = request.body ? JSON.stringify(request.body) : '';
        var message = "[ [".concat(request === null || request === void 0 ? void 0 : request.method, " ").concat(request === null || request === void 0 ? void 0 : request.url, " ").concat(body, "] ").concat(exception.message);
        var httpAdapter = this.httpAdapterHost.httpAdapter;
        var ctx = host.switchToHttp();
        if (exception instanceof common_1.HttpException) {
            httpAdapter.reply(ctx.getResponse(), exception.getResponse(), exception.getStatus());
            return;
        }
        var httpStatus = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        var responseBody = httpStatus >= 500
            ? new jsend_response_dto_1.JsendErrorResponseModel('unknown error occurred', {})
            : new jsend_response_dto_1.JsendFailureResponseModel(exception);
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    };
    AllExceptionsFilter = __decorate([
        (0, common_1.Catch)()
    ], AllExceptionsFilter);
    return AllExceptionsFilter;
}());
exports.AllExceptionsFilter = AllExceptionsFilter;
