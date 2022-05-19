"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleManager = void 0;
var CircleManager = /** @class */ (function () {
    function CircleManager() {
        this.listCircle = [];
    }
    CircleManager.prototype.add = function (circle) {
        this.listCircle.push(circle);
    };
    CircleManager.prototype.show = function () {
        this.listCircle.forEach(function (value) {
            console.log(value);
        });
    };
    return CircleManager;
}());
exports.CircleManager = CircleManager;
//# sourceMappingURL=CircleManager.js.map