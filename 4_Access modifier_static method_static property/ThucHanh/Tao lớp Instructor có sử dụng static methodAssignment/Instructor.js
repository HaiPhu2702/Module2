"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
var Instructor = /** @class */ (function () {
    // @ts-ignore
    function Instructor(_a) {
        var _b = _a === void 0 ? {} : _a, name = _b.name, _c = _b.role, role = _c === void 0 ? "assistant" : _c;
        this.role = role;
        this.name = name;
    }
    // Instance method
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, " - ").concat(this.role));
    };
    Instructor.helloword = function () {
        console.log("hhffdhfgfgfdsh");
    };
    Instructor.canTeach = function (instructor) {
        if (instructor.role === "classroom")
            return true;
        else
            return false;
    };
    return Instructor;
}());
exports.Instructor = Instructor;
//# sourceMappingURL=Instructor.js.map