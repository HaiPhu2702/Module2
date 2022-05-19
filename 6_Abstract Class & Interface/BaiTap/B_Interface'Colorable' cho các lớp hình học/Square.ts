import {I_Colorable} from "./I_Colorable";

export class Square implements I_Colorable{
    private _side:number;


    constructor(side: number) {
        this._side = side;

    }


    get side(): number {
        return this._side;
    }

    set side(value: number)   {
        this._side = value;
    }

    getArea() : number{
        return this._side*this._side;
    }

    howToColor(): string {
        return "Color all four sides..";
    }

}