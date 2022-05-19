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
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_SoSanhHinhTron_I_quydinhSS = void 0;
var C_Circle_1 = require("./C_Circle");
var C_SoSanhHinhTron_I_quydinhSS = /** @class */ (function (_super) {
    __extends(C_SoSanhHinhTron_I_quydinhSS, _super);
    function C_SoSanhHinhTron_I_quydinhSS(radius) {
        return _super.call(this, radius) || this;
    }
    C_SoSanhHinhTron_I_quydinhSS.prototype.compareTo = function (o) {
        if (this.radius > o.radius) {
            return 1;
        }
        else if (this.radius < o.radius) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return C_SoSanhHinhTron_I_quydinhSS;
}(C_Circle_1.C_Circle));
exports.C_SoSanhHinhTron_I_quydinhSS = C_SoSanhHinhTron_I_quydinhSS;
