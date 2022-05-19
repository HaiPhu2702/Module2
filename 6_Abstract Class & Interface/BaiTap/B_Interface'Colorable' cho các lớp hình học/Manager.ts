import {Square} from "./Square";
// import {HV} from "./main";


export class Manager {
   static list:any[]=[];
    constructor() {
    }

    static add(o:object) : void{
        this.list.push(o);
    }

    static show() : void{

        this.list.forEach((value)=>{

            if(value._side){
                console.log(value.getArea());
                console.log(value.howToColor());
            }else{
            console.log(value.getArea());
            }
        })



    }



}