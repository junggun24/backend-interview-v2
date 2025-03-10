"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BasePaginationDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var BasePaginationDto = /** @class */ (function () {
    function BasePaginationDto() {
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; })
    ], BasePaginationDto.prototype, "take");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], BasePaginationDto.prototype, "sortBy");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], BasePaginationDto.prototype, "orderBy");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], BasePaginationDto.prototype, "searchValue");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], BasePaginationDto.prototype, "searchKey");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; })
    ], BasePaginationDto.prototype, "skip");
    BasePaginationDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], BasePaginationDto);
    return BasePaginationDto;
}());
exports.BasePaginationDto = BasePaginationDto;
