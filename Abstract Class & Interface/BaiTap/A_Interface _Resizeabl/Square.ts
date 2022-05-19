import {I_Resizeable} from "./I_Resizeable";

export class Square implements I_Resizeable{
    private _side:number;
    private _resize1:number;


    constructor(side: number) {
        this._side = side;
        this._resize1=0;
    }


    get side(): number {
        return this._side;
    }

    set side(value: number) {
        this._side = value;
    }

    resize() {
        return  this._resize1 =Math.floor(1+Math.random()*100);
    }

    getArea(){
        return this._side*this._side;
    }

    getAreaResize(){
        return this.getArea()*this.resize();
    }


}