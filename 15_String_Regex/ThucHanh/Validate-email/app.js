"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email = /** @class */ (function () {
    function Email() {
        this.regExpEmail = /^[0-9a-zA-Z]+[0-9a-zA-Z]*@[0-9a-zA-Z]+(\.[0-9a-zA-z]+)$/;
    }
    Email.prototype.validate = function (regex) {
        return this.regExpEmail.test(regex);
    };
    return Email;
}());
exports.Email = Email;
