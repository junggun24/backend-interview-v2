"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var class_validator_1 = require("class-validator");
var product_option_decorator_1 = require("../../custom-validator/product-option.decorator");
var class_transformer_1 = require("class-transformer");
var CreateProductOptionDto = /** @class */ (function () {
    function CreateProductOptionDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.Validate)(product_option_decorator_1.IsNumberArrayConstraint)
    ], CreateProductOptionDto.prototype, "options");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return Number; })
    ], CreateProductOptionDto.prototype, "productId");
    return CreateProductOptionDto;
}());
exports["default"] = CreateProductOptionDto;
