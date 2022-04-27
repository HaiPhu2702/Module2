import {Circle} from "./Circle";
let cir1=new Circle(9);
let cir2=new Circle(4);

function distance(cir1:Circle,cir2:Circle,d:number):number{
    let distace= Math.pow((cir1.radius-cir2.radius),2)  + d*d;

    return Math.sqrt(distace);
}

console.log(distance(cir1, cir2, 24));
