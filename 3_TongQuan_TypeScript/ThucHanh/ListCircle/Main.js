"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var CircleManager_1 = require("./CircleManager");
var cir1 = new Circle_1.Circle("yellow", 10);
var cir2 = new Circle_1.Circle("green", 15);
var cir3 = new Circle_1.Circle("blue", 20);
var Mannager = new CircleManager_1.CircleManager();
Mannager.add(cir1);
Mannager.add(cir2);
Mannager.add(cir3);
Mannager.show();
//# sourceMappingURL=Main.js.map