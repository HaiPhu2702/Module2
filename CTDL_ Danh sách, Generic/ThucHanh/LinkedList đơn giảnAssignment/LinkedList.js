"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    LinkedList.prototype.show = function () {
        var listData = [];
        var temp = this.head;
        while (temp != null) {
            listData.push(temp.data);
            temp = temp.next;
        }
        return listData;
    };
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
