export class Point2D {

    x: number;
    y: number;
   k:object={}
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    setX(x: number):void {
        this.x = x;
    }

    setY(y: number):void {
        this.x = y;
    }

    getXY():object{
        return {x:numbers,y:numbers}
    }

    setXY(x:number,y:number):void{
        this.x=x;
        this.y=y;
    }


}