import {C_Circle} from "./C_Circle";
import {C_SoSanhHinhTron_I_quydinhSS} from "./C_SoSanhHinhTron_I_quydinhSS";


let cir1=new C_Circle(10)
let cir2=new C_Circle(20)
let cir3=new C_Circle(30)
let cir4=new C_Circle(40)

let circles = [];

circles[0] = new C_SoSanhHinhTron_I_quydinhSS(10);
circles[1] = new C_SoSanhHinhTron_I_quydinhSS(20);
circles[2] = new C_SoSanhHinhTron_I_quydinhSS(30);


let result=circles[0].compareTo(circles[1])
if(result==-1){
    console.log("nho hon")
}else if(result==1){
    console.log("lon hon")
}else {
    console.log("bang")
}
