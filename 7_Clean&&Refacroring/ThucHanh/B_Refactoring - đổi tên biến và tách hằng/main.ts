// export class Calculator {
//     public static calculate(firstOperand: number, secondOperand: number, operator: string): number {
//         switch (operator) {
//             case '+':
//                 return firstOperand + secondOperand;
//             case '-':
//                 return firstOperand - secondOperand;
//             case '*':
//                 return firstOperand * secondOperand;
//             case '/':
//                 if (secondOperand != 0)
//                     return firstOperand / secondOperand;
//                 else
//                     console.log("Can not divide by 0");
//             default:
//                 console.log("Unsupported operation");
//         }
//     }
// }

export class Calcutor {
    static readonly ADD="+";
    static readonly SUB="-";
    static readonly MUL="*";
    static readonly DIVI="/";

    public static Calcutor(firstOpera:number,secondOper:number,opera:string):number{

        switch (opera){
            case this.ADD:
                return firstOpera+secondOper;
                break;
            case this.SUB:
                return firstOpera-secondOper;
                break;
            case this.MUL:
                return firstOpera*secondOper;
                break;
            case this.DIVI:
                if(secondOper!=0){
                    return firstOpera/secondOper;
                }else {
                    console.log("ko chia dc")
                }
                break;
            default:
                console.log("ko phai opera")
                    break;
        }

    }

}