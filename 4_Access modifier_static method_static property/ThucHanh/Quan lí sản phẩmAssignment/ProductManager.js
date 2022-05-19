"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.listProduct = [];
    }
    ProductManager.prototype.add = function (product) {
        this.listProduct.push(product);
    };
    ProductManager.prototype.getAll = function () {
        return this.listProduct;
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
//# sourceMappingURL=ProductManager.js.map