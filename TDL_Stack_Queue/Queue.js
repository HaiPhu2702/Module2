"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.listQueue = [];
        this.capacity = Infinity;
    }
    Queue.prototype.size = function () {
        return this.listQueue.length;
    };
    Queue.prototype.push = function (data) {
        if (this.size() === this.capacity) {
            throw Error("het ram tran data");
        }
        this.listQueue.push(data);
    };
    Queue.prototype.pop = function () {
        return this.listQueue.shift();
    };
    Queue.prototype.peek = function () {
        return this.listQueue[this.size() - 1];
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // 1
