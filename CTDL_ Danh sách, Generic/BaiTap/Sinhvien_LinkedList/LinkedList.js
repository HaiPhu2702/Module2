"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListSinhVien = void 0;
var Node_1 = require("./Node");
var LinkedListSinhVien = /** @class */ (function () {
    function LinkedListSinhVien() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedListSinhVien.prototype.show = function () {
        var curr = this.head;
        while (curr != null) {
            console.log(curr);
            curr = curr.next;
        }
    };
    LinkedListSinhVien.prototype.totalStudentsFail = function () {
        var count = 0;
        var curr = this.head;
        while (curr != null) {
            if (curr.score <= 5) {
                count++;
            }
            curr = curr.next;
        }
        return count + " nguoi";
    };
    LinkedListSinhVien.prototype.listStudentMaxScore = function () {
        var count = 0;
        var curr = this.head;
        while (curr != null) {
            if (curr.score >= 8) {
                console.log(curr);
                count++;
            }
            curr = curr.next;
        }
        console.log("Tong " + count + " nguoi");
    };
    LinkedListSinhVien.prototype.findByName = function (name) {
        var curr = this.head;
        while (curr != null) {
            if (curr.name === name) {
                return curr;
            }
            curr = curr.next;
        }
        return -1;
    };
    LinkedListSinhVien.prototype.insertFirst = function (name, score) {
        var new_Node = new Node_1.Node(name, score);
        new_Node.next = this.head;
        this.head = new_Node;
        if (!this.tail) {
            this.tail = new_Node;
        }
        this.size++;
    };
    LinkedListSinhVien.prototype.lastInsertNode = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node = new Node_1.Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    return LinkedListSinhVien;
}());
exports.LinkedListSinhVien = LinkedListSinhVien;
