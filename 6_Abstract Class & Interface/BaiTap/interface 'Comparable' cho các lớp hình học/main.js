"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C_Circle_1 = require("./C_Circle");
var C_SoSanhHinhTron_I_quydinhSS_1 = require("./C_SoSanhHinhTron_I_quydinhSS");
var cir1 = new C_Circle_1.C_Circle(10);
var cir2 = new C_Circle_1.C_Circle(20);
var cir3 = new C_Circle_1.C_Circle(30);
var cir4 = new C_Circle_1.C_Circle(40);
var circles = [];
circles[0] = new C_SoSanhHinhTron_I_quydinhSS_1.C_SoSanhHinhTron_I_quydinhSS(10);
circles[1] = new C_SoSanhHinhTron_I_quydinhSS_1.C_SoSanhHinhTron_I_quydinhSS(20);
circles[2] = new C_SoSanhHinhTron_I_quydinhSS_1.C_SoSanhHinhTron_I_quydinhSS(30);
var result = circles[0].compareTo(circles[1]);
if (result == -1) {
    console.log("nho hon");
}
else if (result == 1) {
    console.log("lon hon");
}
else {
    console.log("bang");
}
