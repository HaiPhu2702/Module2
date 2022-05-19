"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this.startTime = Date.now();
        this.endTime = Date.now();
    }
    StopWatch.prototype.getStart = function () {
        return this.startTime;
    };
    StopWatch.prototype.start = function () {
        this.startTime = Date.now();
    };
    StopWatch.prototype.getStop = function () {
        return this.endTime;
    };
    StopWatch.prototype.stop = function () {
        this.endTime = Date.now();
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this.getStop() - this.getStart();
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;
//# sourceMappingURL=StopWatch.js.map