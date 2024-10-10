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
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var class_transformer_1 = require("class-transformer");
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id' })
    ], UserEntity.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('character varying', { name: 'email', length: 50 })
    ], UserEntity.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)('character varying', { name: 'password', length: 60 })
    ], UserEntity.prototype, "password");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('character varying', { name: 'name', length: 20 })
    ], UserEntity.prototype, "name");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('character varying', { name: 'nickname', length: 30 })
    ], UserEntity.prototype, "nickname");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, typeorm_1.Column)('integer', { name: 'age' })
    ], UserEntity.prototype, "age");
    UserEntity = __decorate([
        (0, typeorm_1.Index)('pk_id', ['id'], { unique: true }),
        (0, typeorm_1.Unique)(['email']),
        (0, typeorm_1.Entity)('users', { schema: 'public' })
    ], UserEntity);
    return UserEntity;
}(typeorm_1.BaseEntity));
exports.UserEntity = UserEntity;
