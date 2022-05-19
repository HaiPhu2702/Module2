"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fan_1 = require("./Fan");
var SLOW = 1;
var MEDIUM = 2;
var FAST = 3;
var fan1 = new Fan_1.Fan();
fan1.setOn(true);
fan1.setSpeed(FAST);
fan1.setRadius(10);
fan1.setColor("yellow");
fan1.toString();
var fan2 = new Fan_1.Fan();
//# sourceMappingURL=main.js.map