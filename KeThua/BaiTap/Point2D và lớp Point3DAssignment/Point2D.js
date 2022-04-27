"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.k = {};
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.getX = function () {
        return this.x;
    };
    Point2D.prototype.getY = function () {
        return this.y;
    };
    Point2D.prototype.setX = function (x) {
        this.x = x;
    };
    Point2D.prototype.setY = function (y) {
        this.x = y;
    };
    Point2D.prototype.getXY = function () {
        return { x: numbers, y: numbers };
    };
    Point2D.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
//# sourceMappingURL=Point2D.js.map