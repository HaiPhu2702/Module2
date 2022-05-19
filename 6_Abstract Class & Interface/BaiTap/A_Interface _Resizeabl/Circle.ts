import {I_Resizeable} from "./I_Resizeable";

export class Circle implements I_Resizeable {
    radius: number;
    resize1: number;

    constructor(radius: number) {
        this.radius = radius;
        this.resize1 = 0;
    }

    resize() {
       return  this.resize1 =Math.floor(1+Math.random()*100);
    }

    getArea(){
        return this.radius*this.radius*Math.PI;
    }

    getAreaResize(){
        return this.getArea()*this.resize();
    }


}