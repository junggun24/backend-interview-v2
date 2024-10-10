"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ProductController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var ProductController = /** @class */ (function () {
    function ProductController(productService) {
        this.productService = productService;
    }
    ProductController.prototype.create = function (createProductDto) {
        return this.productService.create(createProductDto);
    };
    ProductController.prototype.findAll = function (aaa, pagination) {
        return this.productService.findAll(pagination);
    };
    ProductController.prototype.findOne = function (id) {
        return this.productService.findOne(+id);
    };
    ProductController.prototype.update = function (id, updateProductDto) {
        return this.productService.update(+id, updateProductDto);
    };
    ProductController.prototype.like = function (userId) {
        console.log(userId);
    };
    ProductController.prototype.remove = function (id) {
        return this.productService.remove(+id);
    };
    ProductController.prototype.createOption = function (createProductOptionDto) {
        return this.productService.createOption(createProductOptionDto);
    };
    ProductController.prototype.updateOption = function (id, updateProductDto) {
        return this.productService.updateOption(+id, updateProductDto);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ProductController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)()),
        __param(1, (0, common_1.Query)())
    ], ProductController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
        __param(1, (0, common_1.Body)())
    ], ProductController.prototype, "update");
    __decorate([
        (0, common_1.Patch)(':id/like'),
        (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
        __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe))
    ], ProductController.prototype, "like");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductController.prototype, "remove");
    __decorate([
        (0, common_1.Post)('option'),
        __param(0, (0, common_1.Body)())
    ], ProductController.prototype, "createOption");
    __decorate([
        (0, common_1.Patch)('option/:id'),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
        __param(1, (0, common_1.Body)())
    ], ProductController.prototype, "updateOption");
    ProductController = __decorate([
        (0, common_1.UsePipes)(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true
        })),
        (0, common_1.Controller)('product')
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;
