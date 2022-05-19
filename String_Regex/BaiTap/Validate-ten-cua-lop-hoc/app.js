"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameClass = void 0;
var NameClass = /** @class */ (function () {
    function NameClass() {
        this.regNameClass = /^[\bCAP]\d{4}[\bGHIKLM]$/;
    }
    NameClass.prototype.NameClass = function (Name) {
        return this.regNameClass.test(Name);
    };
    return NameClass;
}());
exports.NameClass = NameClass;
