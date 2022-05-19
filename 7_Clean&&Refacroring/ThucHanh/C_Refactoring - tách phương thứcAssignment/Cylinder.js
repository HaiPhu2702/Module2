"use strict";
// export class Cylinder {
//     public static getVolume(radius: number, height: number): number {
//         let baseArea: number = Math.PI * radius * radius;
//         let perimeter: number = 2 * Math.PI * radius;
//         let volume: number = perimeter * height + 2 * baseArea;
//         return volume;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Cylinder.getPerimeter = function (radius) {
        return Math.PI * radius * 2;
    };
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.getArea(radius);
        var perimeter = this.getPerimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
