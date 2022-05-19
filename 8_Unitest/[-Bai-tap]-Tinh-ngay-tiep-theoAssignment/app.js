"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextDayCalculator = void 0;
var NextDayCalculator = /** @class */ (function () {
    function NextDayCalculator() {
    }
    NextDayCalculator.prototype.getNextDay = function (day, month, year) {
        return "".concat(day + 1, "/").concat(month, "/").concat(year);
    };
    return NextDayCalculator;
}());
exports.NextDayCalculator = NextDayCalculator;
