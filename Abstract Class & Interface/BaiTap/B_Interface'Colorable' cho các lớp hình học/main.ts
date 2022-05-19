import {Square} from "./Square";
import {Rectangle} from "./Rectangle";
import {Manager} from "./Manager";

let HV = new Square(10);

let HCN = new Rectangle(10, 20);

Manager.add(HV);
Manager.add(HCN);

Manager.show();



