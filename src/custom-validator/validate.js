"use strict";
exports.__esModule = true;
exports.CustomTextValidator = void 0;
var CustomTextValidator = /** @class */ (function () {
    function CustomTextValidator() {
    }
    CustomTextValidator.prototype.validate = function (text, args) {
        // Custom validation logic
        var isValid = true;
        return isValid;
    };
    CustomTextValidator.prototype.defaultMessage = function (args) {
        // Custom error message
        return 'Custom validation failed';
    };
    return CustomTextValidator;
}());
exports.CustomTextValidator = CustomTextValidator;
