"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PTB2 = void 0;
var PTB2 = /** @class */ (function () {
    function PTB2(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    PTB2.prototype.get_x = function () {
        return this.x;
    };
    PTB2.prototype.get_y = function () {
        return this.y;
    };
    PTB2.prototype.get_z = function () {
        return this.z;
    };
    PTB2.prototype.getDiscriminant = function () {
        return this.y * this.y - 4 * this.x * this.z;
    };
    PTB2.prototype.show = function () {
        if (this.getDiscriminant() > 0) {
            var x1 = (-this.y + Math.sqrt(this.getDiscriminant())) / (2 * this.x);
            var x2 = (-this.y - Math.sqrt(this.getDiscriminant())) / (2 * this.x);
            console.log("x1= " + x1, " x2 = " + x2);
        }
        else if (this.getDiscriminant() == 0) {
            var x = -this.y / (2 * this.x);
            console.log(x);
        }
        else {
            console.log("vo nghiem");
        }
    };
    return PTB2;
}());
exports.PTB2 = PTB2;
//# sourceMappingURL=PTB2.js.map