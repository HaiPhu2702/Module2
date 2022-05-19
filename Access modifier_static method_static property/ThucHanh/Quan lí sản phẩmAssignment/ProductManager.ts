import {Product} from "./Product";

export class ProductManager {
    listProduct:Product[]=[];
    constructor() {
    }

     add(product:Product){
        this.listProduct.push(product)
    }
     getAll(){
        return this.listProduct;
     }
}