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
exports.__esModule = true;
exports.PickTypeCreateProductDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var swagger_1 = require("@nestjs/swagger");
var product_entity_1 = require("../entities/product.entity");
var PickTypeCreateProductDto = /** @class */ (function (_super) {
    __extends(PickTypeCreateProductDto, _super);
    function PickTypeCreateProductDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PickTypeCreateProductDto;
}((0, mapped_types_1.PartialType)((0, swagger_1.PickType)(product_entity_1.ProductEntity, ['name', 'description', 'brandId']))));
exports.PickTypeCreateProductDto = PickTypeCreateProductDto;
