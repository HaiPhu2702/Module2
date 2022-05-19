"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_Orange_Ab_Fruit = void 0;
var Ab_Fruit_Edible_1 = require("./Ab_Fruit_Edible");
var C_Orange_Ab_Fruit = /** @class */ (function (_super) {
    __extends(C_Orange_Ab_Fruit, _super);
    function C_Orange_Ab_Fruit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C_Orange_Ab_Fruit.prototype.hoToEat = function () {
        return "Orange could be slided";
    };
    return C_Orange_Ab_Fruit;
}(Ab_Fruit_Edible_1.Ab_Fruit_Edible));
exports.C_Orange_Ab_Fruit = C_Orange_Ab_Fruit;
