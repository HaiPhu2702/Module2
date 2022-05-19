export class Rectangle {

    private _width:number;
    private _length:number;


    constructor(width: number, length: number) {
        this._width = width;
        this._length = length;
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

    getArea(){
        return this._width*this._length
    }
}