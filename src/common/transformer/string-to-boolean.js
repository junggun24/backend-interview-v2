"use strict";
exports.__esModule = true;
exports.StringToBoolean = void 0;
var class_transformer_1 = require("class-transformer");
var StringToBoolean = function () {
    return (0, class_transformer_1.Transform)(function (_a) {
        var value = _a.value;
        if (value === 'true') {
            return true;
        }
        if (value === 'false') {
            return false;
        }
        return value;
    });
};
exports.StringToBoolean = StringToBoolean;
