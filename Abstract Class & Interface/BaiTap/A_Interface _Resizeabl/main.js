"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Square_1 = require("./Square");
var Rectangle_1 = require("./Rectangle");
var HT1 = new Circle_1.Circle(10);
console.log(HT1.getArea());
HT1.resize();
console.log(HT1.getAreaResize());
var HV1 = new Square_1.Square(10);
console.log(HV1.getArea());
HT1.resize();
console.log(HV1.getAreaResize());
var HCN = new Rectangle_1.Rectangle(10, 29);
console.log(HCN.getArea());
HCN.resize();
console.log(HCN.getAreaResize());
