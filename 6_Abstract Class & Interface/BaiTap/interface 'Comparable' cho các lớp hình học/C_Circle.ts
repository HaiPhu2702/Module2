export class C_Circle {
    private _radius:number;


    constructor(radius: number) {
        this._radius = radius;
    }


    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get Area():number{
        return this._radius*this._radius*Math.PI;
    }

    get Perimetter():number{
        return this._radius*2*Math.PI
    }

    toString():string{
        return this._radius.toString();
    }

}