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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductRepository = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var product_entity_1 = require("../entities/product.entity");
var ProductRepository = /** @class */ (function (_super) {
    __extends(ProductRepository, _super);
    // private logger = new ApplicationConsoleLogger(CountryRepository.name);
    function ProductRepository(dataSource) {
        var _this = _super.call(this, product_entity_1.ProductEntity, dataSource.createEntityManager()) || this;
        _this.dataSource = dataSource;
        return _this;
    }
    ProductRepository.prototype.ormCreateProduct = function (createProductDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .insert()
                            .into(product_entity_1.ProductEntity)
                            .values(createProductDto)
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductRepository.prototype.ormFindOneById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.createQueryBuilder('product')
                        .leftJoinAndSelect('product.options', 'options')
                        .where('product.id = :id', { id: id })
                        .getOne()];
            });
        });
    };
    ProductRepository.prototype.ormUpdateProduct = function (productId, updateProductData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .update(product_entity_1.ProductEntity)
                            .set(updateProductData)
                            .where('id = :productId', { productId: productId })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductRepository.prototype.ormFindAll = function (pagination) {
        var state = pagination.state, sortBy = pagination.sortBy, orderBy = pagination.orderBy, searchKey = pagination.searchKey, searchValue = pagination.searchValue, skip = pagination.skip, take = pagination.take;
        var productQb = this.createQueryBuilder('product')
            .where('state = :state', { state: state })
            .leftJoinAndSelect('product.options', 'options')
            .limit(take)
            .offset(skip);
        if (searchKey === 'name' && searchValue) {
            productQb.andWhere("product.".concat(searchKey, " ILIKE :searchValue"), {
                searchValue: "%".concat(searchValue, "%")
            });
        }
        if (searchKey === 'brandId' && searchValue) {
            productQb.andWhere("product.".concat(searchKey, " = :searchValue"), {
                searchValue: "".concat(searchValue)
            });
        }
        if (searchKey === 'color' && searchValue) {
            productQb.andWhere("options.".concat(searchKey, " = :searchValue"), {
                searchValue: "".concat(searchValue)
            });
        }
        if (orderBy && sortBy) {
            var table = void 0;
            //TODO Array to Enum
            var product = ['name', 'accSales'];
            var options = ['price'];
            if (product.includes(orderBy)) {
                table = 'product';
            }
            else if (options.includes(orderBy)) {
                table = 'options';
            }
            if (table) {
                productQb.orderBy("".concat(table, ".").concat(orderBy), sortBy, 'NULLS LAST');
            }
        }
        return productQb.getManyAndCount();
    };
    ProductRepository = __decorate([
        (0, common_1.Injectable)()
    ], ProductRepository);
    return ProductRepository;
}(typeorm_1.Repository));
exports.ProductRepository = ProductRepository;
