import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private height: number = 1.0;

    constructor(radius, color, height) {
        super(radius, color);
        this.height = height;
    }

    public getCapacity(): number {
        return this.getArea() * this.height;
    }

}