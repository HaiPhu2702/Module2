"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this._radius = radius;
        this._color = color;
    }
    Circle.prototype.getradius = function () {
        return this._radius;
    };
    Circle.prototype.setradius = function (value) {
        this._radius = value;
    };
    Circle.prototype.getcolor = function () {
        return this._color;
    };
    Circle.prototype.setcolor = function (value) {
        this._color = value;
    };
    Circle.prototype.getArea = function () {
        return this._radius * this._radius * Math.PI;
    };
    Circle.prototype.getPreci = function () {
        return this._radius * 2 * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map