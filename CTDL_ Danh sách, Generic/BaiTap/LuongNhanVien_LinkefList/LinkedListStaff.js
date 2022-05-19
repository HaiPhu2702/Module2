"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListStaff = void 0;
var Node_1 = require("./Node");
var LinkedListStaff = /** @class */ (function () {
    function LinkedListStaff() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedListStaff.prototype.show = function () {
        var curr = this.head;
        while (curr != null) {
            console.log(curr);
            curr = curr.next;
        }
    };
    //Tính tổng lương của nhân viên đó
    // Tìm tháng có lương cao nhất
    LinkedListStaff.prototype.totalMoney = function () {
        var total = 0;
        if (!this.head) {
            return 0;
        }
        var curr = this.head;
        while (curr != null) {
            total += curr.money;
            curr = curr.next;
        }
        return total;
    };
    LinkedListStaff.prototype.maxMoneyOfMonth = function () {
        if (!this.head) {
            console.log(" đag trống chưa làm tháng nào");
        }
        else {
            var maxMoney = this.head;
            if (!this.head.next) {
                console.log("mới làm dc có tháng à !!tiền =  " + maxMoney.money);
            }
            else {
                var curr = this.head.next;
                while (curr != null) {
                    if (curr.money > maxMoney.money) {
                        maxMoney = curr;
                    }
                    curr = curr.next;
                }
                console.log("thang cao nhat = " + maxMoney.money);
                ;
            }
        }
    };
    LinkedListStaff.prototype.insertFirst = function (month, money) {
        var new_Node = new Node_1.Node_Staff_A(month, money);
        new_Node.next = this.head;
        this.head = new_Node;
        if (!this.tail) {
            this.tail = new_Node;
        }
        this.size++;
    };
    LinkedListStaff.prototype.lastInsert = function (month, money) {
        if (!this.head) {
            this.insertFirst(month, money);
        }
        else {
            var node = new Node_1.Node_Staff_A(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    return LinkedListStaff;
}());
exports.LinkedListStaff = LinkedListStaff;
