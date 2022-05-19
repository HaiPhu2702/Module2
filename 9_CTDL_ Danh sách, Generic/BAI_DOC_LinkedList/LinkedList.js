"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.show = function () {
        var curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    };
    LinkedList.prototype.firstInsertNode = function (data) {
        var new_Node = new Node_1.Node(data);
        new_Node.next = this.head;
        this.head = new_Node;
        if (!this.tail) {
            this.tail = new_Node;
        }
        this.size++;
    };
    LinkedList.prototype.lastInsertNode = function (data) {
        if (!this.head) {
            this.firstInsertNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.firstDeleteNode = function () {
        if (this.head == null) {
            console.log("LL is Empty");
        }
        else {
            if (this.head.next == null && this.tail.next == null) {
                this.head = null;
            }
            else {
                this.head = this.head.next;
            }
            this.size--;
        }
    };
    LinkedList.prototype.lastDeleteNode = function () {
        if (this.head == null) {
            console.log("LL is Empty");
        }
        else {
            if (this.head.next == null && this.tail.next == null) {
                this.head = null;
            }
            else {
                var prev = null;
                var curr = this.head;
                while (curr != null) {
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = null;
                this.tail = prev;
                this.size--;
            }
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
