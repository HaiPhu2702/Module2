"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arraylist_1 = require("./Arraylist");
var arrlist = new Arraylist_1.Arraylist();
arrlist.add({ title: "ha" });
arrlist.add({ title: "haha" });
arrlist.add({ title: "h" });
arrlist.add({ title: "huhu" });
arrlist.add({ title: "hu" });
console.log("trc khi xoa");
console.log("size= " + arrlist.size());
arrlist.show();
console.log("xoa cuoi");
arrlist.remove();
arrlist.show();
console.log("size= " + arrlist.size());
