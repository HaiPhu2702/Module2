"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var arr = [1, 2, 3, 4, 5, 6];
function DaoNguoc(arr) {
    for (var i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for (var j = 0; j < arr.length; j++) {
        var a = stack.pop();
        arr[j] = a;
    }
    return arr;
}
var result = DaoNguoc(arr);
console.log(result);
