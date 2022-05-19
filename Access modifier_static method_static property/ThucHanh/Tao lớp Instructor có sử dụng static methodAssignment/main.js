"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instructor_1 = require("./Instructor");
var a = new Instructor_1.Instructor({ name: "phu", role: "satthu" });
var b = new Instructor_1.Instructor({ name: "ung", role: "hanhdong" });
a.renderDetails();
b.renderDetails();
Instructor_1.Instructor.helloword();
console.log(Instructor_1.Instructor.canTeach(a));
//# sourceMappingURL=main.js.map