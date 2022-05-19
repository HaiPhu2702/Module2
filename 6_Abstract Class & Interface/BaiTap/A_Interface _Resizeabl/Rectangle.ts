import {I_Resizeable} from "./I_Resizeable";

export class Rectangle implements I_Resizeable{
     private _width:number;
     private _length:number;
     private _resize1:number;


    constructor(width: number, length: number) {
        this._width = width;
        this._length = length;
        this._resize1 = 0;
    }


    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }


    resize() {
        return  this._resize1 =Math.floor(1+Math.random()*100);
    }

    getArea(){
        return this._width*this._length;
    }

    getAreaResize(){
        return this.getArea()*this.resize();
    }


}