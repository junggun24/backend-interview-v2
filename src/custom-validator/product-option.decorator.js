"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IsNumberArrayConstraint = void 0;
var class_validator_1 = require("class-validator");
var IsNumberArrayConstraint = /** @class */ (function () {
    function IsNumberArrayConstraint() {
    }
    IsNumberArrayConstraint.prototype.validate = function (value, args) {
        return this.isValid(value);
    };
    IsNumberArrayConstraint.prototype.isValid = function (arr) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var elem = arr_1[_i];
            if (!Array.isArray(elem) || elem.length !== 4) {
                return false;
            }
            for (var _a = 0, elem_1 = elem; _a < elem_1.length; _a++) {
                var arg = elem_1[_a];
                var value = this.checkInt(arg);
                if (!value) {
                    return false;
                }
                parseInt(arg);
            }
        }
        return true;
    };
    IsNumberArrayConstraint.prototype.checkInt = function (value) {
        var isNumeric = 'string' === typeof value &&
            !isNaN(parseFloat(value)) &&
            isFinite(value);
        return isNumeric;
    };
    IsNumberArrayConstraint.prototype.defaultMessage = function (args) {
        return 'Each element of the array must be a number.';
    };
    IsNumberArrayConstraint = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: 'isNumberArray', async: false })
    ], IsNumberArrayConstraint);
    return IsNumberArrayConstraint;
}());
exports.IsNumberArrayConstraint = IsNumberArrayConstraint;
