"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, length) {
        this._width = width;
        this._length = length;
        this._resize1 = 0;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.resize = function () {
        return this._resize1 = Math.floor(1 + Math.random() * 100);
    };
    Rectangle.prototype.getArea = function () {
        return this._width * this._length;
    };
    Rectangle.prototype.getAreaResize = function () {
        return this.getArea() * this.resize();
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
