"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var users_module_1 = require("./users/users.module");
var login_module_1 = require("./login/login.module");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_config_service_1 = require("./database/typeorm.config.service");
var config_1 = require("@nestjs/config");
var auth_module_1 = require("./auth/auth.module");
var product_module_1 = require("./product/product.module");
var core_1 = require("@nestjs/core");
var http_exception_filter_1 = require("./interface/http-exception.filter");
var business_exception_filter_1 = require("./interface/business-exception.filter");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                product_module_1.ProductModule,
                auth_module_1.AuthModule,
                users_module_1.UsersModule,
                login_module_1.LoginModule,
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: "".concat(__dirname, "/env/").concat(process.env.NODE_ENV, ".env")
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    useClass: typeorm_config_service_1.TypeOrmConfigService
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                { provide: core_1.APP_FILTER, useClass: http_exception_filter_1.AllExceptionsFilter },
                {
                    provide: core_1.APP_FILTER,
                    useClass: business_exception_filter_1.BusinessExceptionFilter
                },
                app_service_1.AppService,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
