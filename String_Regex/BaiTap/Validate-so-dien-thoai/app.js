"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone() {
        this.regPhoneNumber = /^$/;
    }
    Phone.prototype.phoneNumber = function (phoneNumber) {
        return this.regPhoneNumber.test(phoneNumber);
    };
    return Phone;
}());
exports.Phone = Phone;
