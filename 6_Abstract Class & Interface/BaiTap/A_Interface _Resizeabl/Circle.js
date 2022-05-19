"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.resize1 = 0;
    }
    Circle.prototype.resize = function () {
        return this.resize1 = Math.floor(1 + Math.random() * 100);
    };
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getAreaResize = function () {
        return this.getArea() * this.resize();
    };
    return Circle;
}());
exports.Circle = Circle;
