"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var queue_1 = require("./queue");
var stack = new Stack_1.Stack();
var queue = new queue_1.Queue();
var str = "radartgd";
function checkDoiXung(str) {
    for (var i = 0; i < str.length; i++) {
        stack.push(str.charAt(i));
        queue.add(str.charAt(i));
    }
    var count = 0;
    for (var i = 0; i < stack.size(); i++) {
        if (stack.pop() !== queue.deQueue()) {
            return false;
        }
    }
    return true;
}
var result = checkDoiXung(str);
if (result == true) {
    console.log("doi xứng");
}
else {
    console.log("ko doi xúng");
}
