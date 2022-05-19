"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
var Node_1 = require("./Node");
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    DoublyLinkedList.prototype.show = function () {
        if (this.head == null) {
            console.log("DLL is Empty");
        }
        var curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    };
    DoublyLinkedList.prototype.firstInsertNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        node.prev = null;
        if (this.head) {
            this.head.prev = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.head = node;
        this.size++;
    };
    DoublyLinkedList.prototype.lastInsertNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = null;
        if (this.tail) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = node;
            this.tail = node;
        }
        this.size++;
    };
    DoublyLinkedList.prototype.insertAfterNode = function (node, data) {
        if (node == null) {
            console.log("node ko ton tai");
        }
        var newNode = new Node_1.Node(data);
        newNode.next = node.next;
        node.next = newNode;
        newNode.prev = node;
    };
    DoublyLinkedList.prototype.deleteFirstNode = function () {
        if (this.head) {
            if (this.head.next) {
                var temp = this.head;
                this.head = this.head.next;
                this.head.prev = null;
                temp.next = null;
            }
            else {
                this.head = null;
            }
        }
        else {
            console.log("DLL is empty");
        }
        this.size--;
    };
    DoublyLinkedList.prototype.deleteLastNode = function () {
        if (this.head) {
            if (this.head.next) {
                var prev = this.tail.prev;
                prev.next = null;
                this.tail.prev = null;
                this.tail = prev;
            }
            else {
                this.head = null;
            }
        }
        else {
            console.log("DLL is Empty");
        }
        this.size--;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
