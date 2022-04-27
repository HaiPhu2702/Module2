import {Circle} from "./Circle";
import {CircleManager} from "./CircleManager";

let cir1=new Circle("yellow", 10)
let cir2=new Circle("green", 15)
let cir3=new Circle("blue", 20)

let Mannager=new CircleManager();
Mannager.add(cir1)
Mannager.add(cir2)
Mannager.add(cir3)

Mannager.show();