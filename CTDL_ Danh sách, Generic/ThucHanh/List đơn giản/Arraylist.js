"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arraylist = void 0;
var Arraylist = /** @class */ (function () {
    function Arraylist() {
        this.Container = [];
    }
    Arraylist.prototype.show = function () {
        console.log(this.Container);
    };
    Arraylist.prototype.add = function (data) {
        this.Container.push(data);
    };
    Arraylist.prototype.get = function (index) {
        return this.Container[index];
    };
    Arraylist.prototype.remove = function () {
        this.Container.pop();
    };
    Arraylist.prototype.size = function () {
        return this.Container.length;
    };
    return Arraylist;
}());
exports.Arraylist = Arraylist;
