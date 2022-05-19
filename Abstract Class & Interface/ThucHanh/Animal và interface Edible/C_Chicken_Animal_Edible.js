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
exports.C_Chicken_Animal_Edible = void 0;
var Ab_Animal_1 = require("./Ab_Animal");
var C_Chicken_Animal_Edible = /** @class */ (function (_super) {
    __extends(C_Chicken_Animal_Edible, _super);
    function C_Chicken_Animal_Edible() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C_Chicken_Animal_Edible.prototype.hoToEat = function () {
        return "Chicken: cluck-cluck!";
    };
    C_Chicken_Animal_Edible.prototype.makeSound = function () {
        return "Could be fried";
    };
    return C_Chicken_Animal_Edible;
}(Ab_Animal_1.Ab_Animal));
exports.C_Chicken_Animal_Edible = C_Chicken_Animal_Edible;
