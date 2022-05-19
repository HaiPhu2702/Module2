"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calcutor = void 0;
var Calcutor = /** @class */ (function () {
    function Calcutor() {
    }
    Calcutor.Calcutor = function (firstOpera, secondOper, opera) {
        switch (opera) {
            case this.ADD:
                return firstOpera + secondOper;
                break;
            case this.SUB:
                return firstOpera - secondOper;
                break;
            case this.MUL:
                return firstOpera * secondOper;
                break;
            case this.DIVI:
                if (secondOper != 0) {
                    return firstOpera / secondOper;
                }
                else {
                    console.log("ko chia dc");
                }
                break;
            default:
                console.log("ko phai opera");
                break;
        }
    };
    Calcutor.ADD = "+";
    Calcutor.SUB = "-";
    Calcutor.MUL = "*";
    Calcutor.DIVI = "/";
    return Calcutor;
}());
exports.Calcutor = Calcutor;
