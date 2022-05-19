"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
// import {HV} from "./main";
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.add = function (o) {
        this.list.push(o);
    };
    Manager.show = function () {
        this.list.forEach(function (value) {
            if (value._side) {
                console.log(value.getArea());
                console.log(value.howToColor());
            }
            else {
                console.log(value.getArea());
            }
        });
    };
    Manager.list = [];
    return Manager;
}());
exports.Manager = Manager;
