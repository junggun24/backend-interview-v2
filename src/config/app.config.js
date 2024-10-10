"use strict";
exports.__esModule = true;
exports.AppConfig = void 0;
var config_1 = require("@nestjs/config");
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.configModule = function () {
        return config_1.ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: "".concat(__dirname, "/dist/env/").concat(process.env.NODE_ENV, ".env")
        });
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
