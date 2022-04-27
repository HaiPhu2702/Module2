import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);

let manager=new ProductManager();
manager.add(laptop);
manager.add(iphone);

let a=manager.getAll()
console.log(a);