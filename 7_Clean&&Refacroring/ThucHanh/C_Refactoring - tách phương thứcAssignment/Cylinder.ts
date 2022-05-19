// export class Cylinder {
//     public static getVolume(radius: number, height: number): number {
//         let baseArea: number = Math.PI * radius * radius;
//         let perimeter: number = 2 * Math.PI * radius;
//         let volume: number = perimeter * height + 2 * baseArea;
//         return volume;
//     }
// }

export class Cylinder {

    public static getArea(radius: number) {

        return Math.PI * radius * radius;
    }

    public static getPerimeter(radius: number) {
        return Math.PI * radius * 2;
    }


    public static getVolume(radius: number, height: number): number {
        let baseArea: number = this.getArea(radius);
        let perimeter: number = this.getPerimeter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }

}