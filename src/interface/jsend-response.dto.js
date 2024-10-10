"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JsendErrorResponseModel = exports.JsendFailureResponseModel = exports.JsendSuccessResponseModel = void 0;
var swagger_1 = require("@nestjs/swagger");
/**
 * The response model for when all went well, and (usually) some data was returned.
 * @param data
 * Acts as the wrapper for any data returned by the API call. If the call returns no data (as in the last example), data should be set to null.
 * @example
 * ```json
 * {
 *  "data": {
 *    "posts": [
 *      { "id": 1, "title": "A blog post", "body": "Some useful content" },
 *      { "id": 2, "title": "Another blog post", "body": "More content" }
 *    ]
 *  }
 * }
 * ```
 * @see https://github.com/omniti-labs/jsend#success
 */
var JsendSuccessResponseModel = /** @class */ (function () {
    function JsendSuccessResponseModel(data) {
        this.status = 'success';
        this.data = data;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({})
    ], JsendSuccessResponseModel.prototype, "status");
    return JsendSuccessResponseModel;
}());
exports.JsendSuccessResponseModel = JsendSuccessResponseModel;
/**
 * The response model for when There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied.
 * @param data
 * Again, provides the wrapper for the details of why the request failed. If the reasons for failure correspond to POST values, the response object's keys SHOULD correspond to those POST values.
 * @example
 * ```json
 * {
 *  "data": { "title" : "A title is required" }
 * }
 * ```
 * @see https://github.com/omniti-labs/jsend#fail
 */
var JsendFailureResponseModel = /** @class */ (function () {
    function JsendFailureResponseModel(data) {
        this.status = 'fail';
        this.data = data;
    }
    return JsendFailureResponseModel;
}());
exports.JsendFailureResponseModel = JsendFailureResponseModel;
/**
 * The response model for when There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied.
 * @param data
 * Again, provides the wrapper for the details of why the request failed. If the reasons for failure correspond to POST values, the response object's keys SHOULD correspond to those POST values.
 * @example
 * ```json
 * {
 *  "data": { "title" : "A title is required" }
 * }
 * ```
 * @see https://github.com/omniti-labs/jsend#fail
 */
var JsendErrorResponseModel = /** @class */ (function () {
    function JsendErrorResponseModel(message, data, code) {
        this.status = 'error';
        this.message = message;
        this.data = data;
        this.code = code;
    }
    return JsendErrorResponseModel;
}());
exports.JsendErrorResponseModel = JsendErrorResponseModel;
