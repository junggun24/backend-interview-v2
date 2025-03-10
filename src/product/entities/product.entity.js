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
exports.ProductEntity = void 0;
var typeorm_1 = require("typeorm");
var class_transformer_1 = require("class-transformer");
var option_entity_1 = require("./option.entity");
var ProductEntity = /** @class */ (function (_super) {
    __extends(ProductEntity, _super);
    function ProductEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id' })
    ], ProductEntity.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('character varying', { name: 'name', length: 50 })
    ], ProductEntity.prototype, "name");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('character varying', { name: 'description' })
    ], ProductEntity.prototype, "description");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('integer', { name: 'brand_id' })
    ], ProductEntity.prototype, "brandId");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('integer', { name: 'acc_sales' })
    ], ProductEntity.prototype, "accSales");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return option_entity_1.OptionEntity; }, function (object) { return object.product; })
    ], ProductEntity.prototype, "options");
    ProductEntity = __decorate([
        (0, typeorm_1.Index)('pk_id', ['id'], { unique: true }),
        (0, typeorm_1.Unique)(['name']),
        (0, typeorm_1.Entity)('product', { schema: 'public' })
    ], ProductEntity);
    return ProductEntity;
}(typeorm_1.BaseEntity));
exports.ProductEntity = ProductEntity;
