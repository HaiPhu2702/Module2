const SLOW = 1;
const MEDIUM = 2;
const FAST = 3;
export class Fan {
    private _speed: number;
    private _on: boolean;
    private _radius: number
    private _color: string;

    constructor() {
        this._speed = MEDIUM;
        this._on = false;
        this._radius = 5;
        this._color = 'blue';

    }


    getSpeed(): number {
        return this._speed;
    }

    setSpeed(value: number):void {
        this._speed = value;
    }

    getOn(): boolean {
        return this._on;
    }

    setOn(value: boolean):void {
        this._on = value;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number):void {
        this._radius = value;
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string):void {
        this._color = value;
    }
    toString(){
        if(this.getOn()==true) {
            return `fan is on vơi speed ${this.getSpeed()} color ${this.getColor()} radius ${this.getRadius()} `
        }else {
            return `off`

        }

    }
}