"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
        this.capacity = Infinity;
    }
    Stack.prototype.size = function () {
        return this.container.length;
    };
    Stack.prototype.push = function (data) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.container.push(data);
    };
    Stack.prototype.peek = function () {
        return this.container[this.size() - 1];
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
stack.push("A");
stack.push("B");
console.log(stack.size());
; // Output: 2
console.log(stack.peek());
; // Output: "B"
console.log(stack.size());
; // Output: 2
console.log(stack.pop());
; // Output: "B"
console.log(stack.size());
; // Output: 1
