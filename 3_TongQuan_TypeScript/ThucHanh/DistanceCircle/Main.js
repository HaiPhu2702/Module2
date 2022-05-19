"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var cir1 = new Circle_1.Circle(9);
var cir2 = new Circle_1.Circle(4);
function distance(cir1, cir2, d) {
    var distace = Math.pow((cir1.radius - cir2.radius), 2) + d * d;
    return Math.sqrt(distace);
}
console.log(distance(cir1, cir2, 24));
//# sourceMappingURL=Main.js.map