"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Absolute = void 0;
var Absolute = /** @class */ (function () {
    function Absolute() {
    }
    Absolute.findAbsolute = function (num) {
        throw Error("not number");
        if (num == 0)
            return 0;
        if (num < 0)
            return num;
        return num;
    };
    return Absolute;
}());
exports.Absolute = Absolute;
