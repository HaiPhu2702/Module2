"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var sv = new LinkedList_1.LinkedListSinhVien();
sv.insertFirst("phu", 9);
sv.insertFirst("hu", 8);
sv.insertFirst("u", 4);
sv.show();
console.log("-------------------");
sv.lastInsertNode("kakaka", 2);
sv.show();
console.log("---------");
console.log(sv.totalStudentsFail());
;
console.log("---------");
sv.listStudentMaxScore();
console.log("--------");
var a = sv.findByName("husddsf");
if (a == -1) {
    console.log("ko thay");
}
else {
    console.log(a);
}
