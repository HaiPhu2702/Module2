"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(side) {
        this._side = side;
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
    Square.prototype.getArea = function () {
        return this._side * this._side;
    };
    Square.prototype.howToColor = function () {
        return "Color all four sides..";
    };
    return Square;
}());
exports.Square = Square;
