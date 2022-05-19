"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acount = void 0;
var Acount = /** @class */ (function () {
    function Acount() {
        this.regAcount = /^[_0-9a-z]{6,}$/;
    }
    Acount.prototype.valadateAcount = function (acount) {
        return this.regAcount.test(acount);
    };
    return Acount;
}());
exports.Acount = Acount;
