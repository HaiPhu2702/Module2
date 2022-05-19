import {Circle} from "./Circle";
import {Square} from "./Square";
import {Rectangle} from "./Rectangle";

let HT1=new Circle(10);
console.log(HT1.getArea());

HT1.resize();

console.log(HT1.getAreaResize());




let HV1=new Square(10);
console.log(HV1.getArea());

HT1.resize();

console.log(HV1.getAreaResize());


let HCN=new Rectangle(10,29)
console.log(HCN.getArea());

HCN.resize();

console.log(HCN.getAreaResize());

