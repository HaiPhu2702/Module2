"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.listQueue = [];
    }
    Queue.prototype.add = function (data) {
        this.listQueue.push(data);
    };
    Queue.prototype.deQueue = function () {
        return this.listQueue.shift();
    };
    Queue.prototype.size = function () {
        return this.listQueue.length;
    };
    return Queue;
}());
exports.Queue = Queue;
