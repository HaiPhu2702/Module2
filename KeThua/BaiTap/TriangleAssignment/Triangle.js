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
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, side1, side2, side3) {
        var _this = _super.call(this, name, color) || this;
        _this._side1 = side1;
        _this._side2 = side2;
        _this._side3 = side3;
        return _this;
    }
    Triangle.prototype.getside1 = function () {
        return this._side1;
    };
    Triangle.prototype.setside1 = function (value) {
        this._side1 = value;
    };
    Triangle.prototype.getside2 = function () {
        return this._side2;
    };
    Triangle.prototype.setside2 = function (value) {
        this._side2 = value;
    };
    Triangle.prototype.getside3 = function () {
        return this._side3;
    };
    Triangle.prototype.setside3 = function (value) {
        this._side3 = value;
    };
    Triangle.prototype.getPerimeter = function () {
        return this._side2 + this._side1 + this._side3;
    };
    Triangle.prototype.getHaftPerimeter = function () {
        return this.getPerimeter() / 2;
    };
    Triangle.prototype.getArea = function () {
        return Math.sqrt(this.getHaftPerimeter() * (this.getPerimeter() - this._side1) *
            (this.getPerimeter() - this._side2) * (this.getPerimeter() - this._side3));
        //sqrt(p (p-a)  (p-b) (p-c) ) p:nua chu vi
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
//# sourceMappingURL=Triangle.js.map