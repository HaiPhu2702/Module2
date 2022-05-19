export class Circle {
    private _radius:number;
    private _color:string;

    constructor(radius:number, color:string) {
        this._radius=radius;
        this._color=color;
    }


    getradius(): number {
        return this._radius;
    }

    setradius(value: number) {
        this._radius = value;
    }

    getcolor(): string {
        return this._color;
    }

   public setcolor(value: string):void {
        this._color = value;
    }

    public getArea():number{
        return this._radius*this._radius*Math.PI;
    }

      public getPreci():number{
        return this._radius*2*Math.PI;
    }



}