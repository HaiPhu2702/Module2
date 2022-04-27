import {Shape} from "./Shape";

export class Triangle extends Shape{
    private _side1:number;
    private _side2:number;
    private _side3:number;

    constructor(name,color,side1:number,side2:number,side3:number) {
        super(name,color);
        this._side1=side1;
        this._side2=side2;
        this._side3=side3;
    }


    getside1(): number {
        return this._side1;
    }

    setside1(value: number) {
        this._side1 = value;
    }

    getside2(): number {
        return this._side2;
    }

    setside2(value: number) {
        this._side2 = value;
    }

    getside3(): number {
        return this._side3;
    }

    setside3(value: number) {
        this._side3 = value;
    }

    getPerimeter():number{
        return this._side2+this._side1+this._side3
    }

    getHaftPerimeter():number{
        return this.getPerimeter()/2;
    }

    getArea():number{
        return  Math.sqrt(this.getHaftPerimeter()*(this.getPerimeter()-this._side1)*
            (this.getPerimeter()-this._side2)*(this.getPerimeter()-this._side3))
//sqrt(p (p-a)  (p-b) (p-c) ) p:nua chu vi
    }


}