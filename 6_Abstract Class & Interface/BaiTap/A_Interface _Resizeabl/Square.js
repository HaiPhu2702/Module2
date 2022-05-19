"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(side) {
        this._side = side;
        this._resize1 = 0;
    }
    Object.defineProperty(Square.prototype, "side", {
        get: function () {
            return this._side;
        },
        set: function (value) {
            this._side = value;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.resize = function () {
        return this._resize1 = Math.floor(1 + Math.random() * 100);
    };
    Square.prototype.getArea = function () {
        return this._side * this._side;
    };
    Square.prototype.getAreaResize = function () {
        return this.getArea() * this.resize();
    };
    return Square;
}());
exports.Square = Square;
