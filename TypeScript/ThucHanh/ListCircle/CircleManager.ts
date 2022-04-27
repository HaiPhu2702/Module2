import {Circle} from "./Circle";


export class CircleManager {
    listCircle: Circle[]=[];
    constructor() {
    }

    add(circle:Circle){
        this.listCircle.push(circle)
    }
    show(){
        this.listCircle.forEach((value)=>{
            console.log(value)
        })
    }
}