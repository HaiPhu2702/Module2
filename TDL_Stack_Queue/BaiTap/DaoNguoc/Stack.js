"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.list = [];
    }
    Stack.prototype.show = function () {
        return this.list;
    };
    Stack.prototype.push = function (data) {
        this.list.push(data);
    };
    Stack.prototype.pop = function () {
        return this.list.pop();
    };
    Stack.prototype.size = function () {
        return this.list.length;
    };
    return Stack;
}());
exports.Stack = Stack;
