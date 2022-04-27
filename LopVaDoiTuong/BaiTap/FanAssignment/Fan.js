"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
var SLOW = 1;
var MEDIUM = 2;
var FAST = 3;
var Fan = /** @class */ (function () {
    function Fan() {
        this._speed = MEDIUM;
        this._on = false;
        this._radius = 5;
        this._color = 'blue';
    }
    Fan.prototype.getSpeed = function () {
        return this._speed;
    };
    Fan.prototype.setSpeed = function (value) {
        this._speed = value;
    };
    Fan.prototype.getOn = function () {
        return this._on;
    };
    Fan.prototype.setOn = function (value) {
        this._on = value;
    };
    Fan.prototype.getRadius = function () {
        return this._radius;
    };
    Fan.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Fan.prototype.getColor = function () {
        return this._color;
    };
    Fan.prototype.setColor = function (value) {
        this._color = value;
    };
    Fan.prototype.toString = function () {
        if (this.getOn() == true) {
            return "fan is on v\u01A1i speed ".concat(this.getSpeed(), " color ").concat(this.getColor(), " radius ").concat(this.getRadius(), " ");
        }
        else {
            return "off";
        }
    };
    return Fan;
}());
exports.Fan = Fan;
//# sourceMappingURL=Fan.js.map