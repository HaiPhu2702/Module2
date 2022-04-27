"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductManager_1 = require("./ProductManager");
var laptop = new Product_1.Product("Laptop", 20000);
var iphone = new Product_1.Product("Iphone", 10000);
var manager = new ProductManager_1.ProductManager();
manager.add(laptop);
manager.add(iphone);
var a = manager.getAll();
console.log(a);
//# sourceMappingURL=Main.js.map