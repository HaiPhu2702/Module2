"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_Circle = void 0;
var C_Circle = /** @class */ (function () {
    function C_Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(C_Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C_Circle.prototype, "Area", {
        get: function () {
            return this._radius * this._radius * Math.PI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C_Circle.prototype, "Perimetter", {
        get: function () {
            return this._radius * 2 * Math.PI;
        },
        enumerable: false,
        configurable: true
    });
    C_Circle.prototype.toString = function () {
        return this._radius.toString();
    };
    return C_Circle;
}());
exports.C_Circle = C_Circle;
