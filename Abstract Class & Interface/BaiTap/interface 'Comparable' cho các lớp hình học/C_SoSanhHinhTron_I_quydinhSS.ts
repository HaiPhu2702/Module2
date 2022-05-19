import {I_quyDinhSoSanh} from "./I_quyDinhSoSanh";
import {C_Circle} from "./C_Circle";


export class C_SoSanhHinhTron_I_quydinhSS extends C_Circle implements I_quyDinhSoSanh {
    constructor(radius: number) {
        super(radius);
    }


    compareTo(o: C_Circle): number {

        if (this.radius > o.radius) {
            return 1
        } else if (this.radius < o.radius) {
            return -1
        } else {
            return 0
        }

    }


}