"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductPaginationDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var base_pagination_dto_1 = require("../../common/dto/base-pagination.dto");
var class_validator_1 = require("class-validator");
var string_to_boolean_1 = require("../../common/transformer/string-to-boolean");
var ProductPaginationDto = /** @class */ (function (_super) {
    __extends(ProductPaginationDto, _super);
    function ProductPaginationDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, string_to_boolean_1.StringToBoolean)(),
        (0, class_validator_1.IsBoolean)()
    ], ProductPaginationDto.prototype, "state");
    return ProductPaginationDto;
}((0, swagger_1.PartialType)(base_pagination_dto_1.BasePaginationDto)));
exports.ProductPaginationDto = ProductPaginationDto;
