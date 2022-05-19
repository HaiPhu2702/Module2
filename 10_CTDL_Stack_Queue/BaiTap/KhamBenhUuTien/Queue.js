"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.listQueue = [];
    }
    Queue.prototype.add = function (priority, name) {
        this.listQueue.push([priority, name]);
    };
    Queue.prototype.delete = function () {
        // min lúc này là mảng gồm số +tên có index 0:số và  1: tên  =>
        var min = this.listQueue[0];
        var indexMin = -1;
        this.listQueue.forEach(function (value, index) {
            //chính là so sánh số
            if (value[0] < min[0]) {
                min = value;
                indexMin = index;
            }
        });
        this.listQueue.splice(indexMin, 1);
        //xóa xong trả về tên của bệnh nhân đã xóa
        return min[1];
    };
    Queue.prototype.isEmpty = function () {
        return this.listQueue.length == 0;
    };
    Queue.prototype.size = function () {
        return this.listQueue.length;
    };
    return Queue;
}());
exports.Queue = Queue;
